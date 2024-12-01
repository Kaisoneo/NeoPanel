from models.server import Server
from app import db

def create_server(name, ip_address, status, type, cpu_usage, ram_usage, storage_usage):
    new_server = Server(name=name, ip_address=ip_address, status=status, type=type,
                        cpu_usage=cpu_usage, ram_usage=ram_usage, storage_usage=storage_usage)
    db.session.add(new_server)
    db.session.commit()
    return new_server

def update_server(server_id, **kwargs):
    server = Server.query.get(server_id)
    if server:
        for key, value in kwargs.items():
            setattr(server, key, value)
        db.session.commit()
    return server

def delete_server(server_id):
    server = Server.query.get(server_id)
    if server:
        db.session.delete(server)
        db.session.commit()
        return True
    return False

