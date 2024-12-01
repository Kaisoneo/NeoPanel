from flask import Blueprint, jsonify
from models.domain import Domain

domain_bp = Blueprint('domain', __name__)

@domain_bp.route('/', methods=['GET'])
def get_domains():
    domains = Domain.query.all()
    return jsonify([{
        'id': domain.id,
        'name': domain.name,
        'registration_date': domain.registration_date.isoformat(),
        'expiry_date': domain.expiry_date.isoformat(),
        'status': domain.status
    } for domain in domains])

