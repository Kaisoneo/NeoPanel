from flask import Flask, render_template, jsonify, request
from flask_cors import CORS
from extensions import db
import os
import socket

def create_app():
    app = Flask(__name__, template_folder='../frontend/html')
    CORS(app)

    # Configure the SQLite database
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///neohost.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # Initialize the database with the app
    db.init_app(app)

    # Import models
    from models.user import User
    from models.server import Server
    from models.domain import Domain

    # Import routes
    from routes.main_routes import main_bp
    from routes.api_routes import api_bp
    from routes.server_routes import server_bp
    from routes.domain_routes import domain_bp
    from routes.user_routes import user_bp

    # Register blueprints
    app.register_blueprint(main_bp)
    app.register_blueprint(api_bp, url_prefix='/api')
    app.register_blueprint(server_bp, url_prefix='/api/servers')
    app.register_blueprint(domain_bp, url_prefix='/api/domains')
    app.register_blueprint(user_bp, url_prefix='/api/users')

    # Create the database tables
    with app.app_context():
        db.create_all()

    return app

if __name__ == '__main__':
    app = create_app()

    # Automatische Erkennung von Umgebung (Lokal oder Server)
    hostname = socket.gethostname()
    local_ips = ['127.0.0.1', 'localhost']

    if hostname in local_ips or socket.gethostbyname(hostname) in local_ips:
        # Lokaler Server
        app.run(host='127.0.0.1', port=5000, debug=True)
    else:
        # Öffentlicher Server
        app.run(host='0.0.0.0', port=2766, debug=False)
