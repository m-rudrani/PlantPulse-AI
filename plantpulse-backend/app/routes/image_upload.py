from flask import Blueprint, request, jsonify
import os
from werkzeug.utils import secure_filename
from ..models import db, ImageUpload

image_upload_bp = Blueprint("image_upload", __name__)
UPLOAD_FOLDER = "static/uploads"

@image_upload_bp.route("/upload", methods=["POST"])
def upload_image():
    if "image" not in request.files:
        return jsonify({"error": "No image provided"}), 400

    file = request.files["image"]
    filename = secure_filename(file.filename)
    file_path = os.path.join(UPLOAD_FOLDER, filename)
    file.save(file_path)

    new_upload = ImageUpload(filename=filename)
    db.session.add(new_upload)
    db.session.commit()

    return jsonify({"message": "Image uploaded successfully", "file_path": file_path}), 201
