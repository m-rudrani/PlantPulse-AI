from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_migrate import Migrate
from .config import Config

# Initialize SQLAlchemy and Flask-Migrate
db = SQLAlchemy()
migrate = Migrate()

def create_app():
    """Create and configure the Flask application."""
    # Create the Flask application instance
    app = Flask(__name__)
    
    # Load the app configuration from the Config object
    app.config.from_object(Config)

    # Initialize extensions
    db.init_app(app)
    migrate.init_app(app, db)  # Initialize migration support
    CORS(app)  # Enable Cross-Origin Resource Sharing

    # Import and register blueprints
    from .routes import auth, image_upload, plant_analysis
    app.register_blueprint(auth.bp)
    app.register_blueprint(image_upload.bp)
    app.register_blueprint(plant_analysis.bp)

    return app