import os
from flask import Blueprint, request, jsonify
from werkzeug.utils import secure_filename
from ..models import db, ImageUpload

UPLOAD_FOLDER = "static/uploads"

bp = Blueprint("image_upload", __name__, url_prefix="/upload")

@bp.route("/", methods=["POST"])
def upload_image():
    if "file" not in request.files:
        return jsonify({"error": "No file part"}), 400
    
    file = request.files["file"]
    if file.filename == "":
        return jsonify({"error": "No selected file"}), 400

    filename = secure_filename(file.filename)
    file.save(os.path.join(UPLOAD_FOLDER, filename))

    new_upload = ImageUpload(filename=filename)
    db.session.add(new_upload)
    db.session.commit()

    return jsonify({"message": "Image uploaded successfully", "filename": filename}), 201
