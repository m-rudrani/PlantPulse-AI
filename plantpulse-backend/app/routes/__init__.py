from flask import Blueprint

# Blueprint placeholders
auth_bp = Blueprint("auth", __name__)
plant_analysis_bp = Blueprint("plant_analysis", __name__)
image_upload_bp = Blueprint("image_upload", __name__)

# Import routes to register them
from . import auth, plant_analysis, image_upload
