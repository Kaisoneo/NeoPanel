from flask import Blueprint, render_template

main_bp = Blueprint('main', __name__)

@main_bp.route('/')
def index():
    return render_template('index.html')

@main_bp.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

@main_bp.route('/server')
def server_tab():
    return render_template('server.html')

@main_bp.route('/domain')
def domain_tab():
    return render_template('domain.html')

@main_bp.route('/user')
def user_tab():
    return render_template('user.html')

@main_bp.route('/partner')
def partner_tab():  # Funktionsname angepasst
    return render_template('partner.html')
