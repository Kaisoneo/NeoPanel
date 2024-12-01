from flask import Blueprint, jsonify, request
from models.user import User
from extensions import db

user_bp = Blueprint('user', __name__)

@user_bp.route('/', methods=['GET', 'POST'])
def user_profile():
    if request.method == 'GET':
        user = User.query.first()  # For simplicity, we're just getting the first user
        return jsonify({
            'name': user.name,
            'email': user.email,
            'alias': user.alias,
            'description': user.description
        })
    elif request.method == 'POST':
        data = request.json
        user = User.query.first()  # For simplicity, we're just updating the first user
        user.name = data.get('name', user.name)
        user.email = data.get('email', user.email)
        user.alias = data.get('alias', user.alias)
        user.description = data.get('description', user.description)
        db.session.commit()
        return jsonify({'message': 'User profile updated successfully'})

