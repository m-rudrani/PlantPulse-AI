from flask import Blueprint, request, jsonify
from ..services.watsonx import identify_plant, assess_plant_health

bp = Blueprint("plant_analysis", __name__, url_prefix="/plant")

@bp.route("/identify", methods=["POST"])
def plant_identification():
    image_file = request.files.get("file")
    if not image_file:
        return jsonify({"error": "No image file provided"}), 400

    image_data = image_file.read()
    plant_name = identify_plant(image_data)

    return jsonify({"plant_name": plant_name})

@bp.route("/health", methods=["POST"])
def plant_health():
    image_file = request.files.get("file")
    if not image_file:
        return jsonify({"error": "No image file provided"}), 400

    image_data = image_file.read()
    health_status, recommendations = assess_plant_health(image_data)

    return jsonify({"health_status": health_status, "recommendations": recommendations})
