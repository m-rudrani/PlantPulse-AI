from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from .config import Config

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    
    CORS(app)
    db.init_app(app)
    migrate.init_app(app, db)

    # Register blueprints
    from .routes.auth import auth_bp
    from .routes.plant_analysis import plant_analysis_bp
    from .routes.image_upload import image_upload_bp

    app.register_blueprint(auth_bp, url_prefix='/auth')
    app.register_blueprint(plant_analysis_bp, url_prefix='/plant')
    app.register_blueprint(image_upload_bp, url_prefix='/image')

    return app
