from models.domain import Domain
from app import db

def create_domain(name, registration_date, expiry_date, status):
    new_domain = Domain(name=name, registration_date=registration_date,
                        expiry_date=expiry_date, status=status)
    db.session.add(new_domain)
    db.session.commit()
    return new_domain

def update_domain(domain_id, **kwargs):
    domain = Domain.query.get(domain_id)
    if domain:
        for key, value in kwargs.items():
            setattr(domain, key, value)
        db.session.commit()
    return domain

def delete_domain(domain_id):
    domain = Domain.query.get(domain_id)
    if domain:
        db.session.delete(domain)
        db.session.commit()
        return True
    return False

