from flask import Blueprint, request, jsonify
from ..services.watsonx import identify_plant, assess_plant_health

plant_analysis_bp = Blueprint("plant_analysis", __name__)

@plant_analysis_bp.route("/identify", methods=["POST"])
def identify():
    if "image" not in request.files:
        return jsonify({"error": "No image provided"}), 400

    image = request.files["image"].read()
    plant_name = identify_plant(image)

    return jsonify({"plant_name": plant_name})

@plant_analysis_bp.route("/assess", methods=["POST"])
def assess():
    if "image" not in request.files:
        return jsonify({"error": "No image provided"}), 400

    image = request.files["image"].read()
    health_status, recommendations = assess_plant_health(image)

    return jsonify({
        "health_status": health_status,
        "recommendations": recommendations
    })
