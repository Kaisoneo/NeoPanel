from flask import Blueprint, jsonify
from models.server import Server

server_bp = Blueprint('server', __name__)

@server_bp.route('/', methods=['GET'])
def get_servers():
    servers = Server.query.all()
    return jsonify([{
        'id': server.id,
        'name': server.name,
        'ip_address': server.ip_address,
        'status': server.status,
        'type': server.type,
        'cpu_usage': server.cpu_usage,
        'ram_usage': server.ram_usage,
        'storage_usage': server.storage_usage
    } for server in servers])

