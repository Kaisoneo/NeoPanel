from extensions import db

class Server(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    ip_address = db.Column(db.String(15), nullable=False)
    status = db.Column(db.String(20), nullable=False)
    type = db.Column(db.String(50), nullable=False)
    cpu_usage = db.Column(db.Float)
    ram_usage = db.Column(db.Float)
    storage_usage = db.Column(db.Float)

