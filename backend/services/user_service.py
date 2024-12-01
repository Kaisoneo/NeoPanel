from models.user import User
from app import db
from werkzeug.security import generate_password_hash, check_password_hash

def create_user(name, email, password, alias=None, description=None):
    new_user = User(name=name, email=email, password_hash=generate_password_hash(password),
                    alias=alias, description=description)
    db.session.add(new_user)
    db.session.commit()
    return new_user

def update_user(user_id, **kwargs):
    user = User.query.get(user_id)
    if user:
        for key, value in kwargs.items():
            if key == 'password':
                user.password_hash = generate_password_hash(value)
            else:
                setattr(user, key, value)
        db.session.commit()
    return user

def delete_user(user_id):
    user = User.query.get(user_id)
    if user:
        db.session.delete(user)
        db.session.commit()
        return True
    return False

def verify_password(user_id, password):
    user = User.query.get(user_id)
    if user:
        return check_password_hash(user.password_hash, password)
    return False

