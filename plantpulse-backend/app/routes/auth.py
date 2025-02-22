from flask import Blueprint, request, jsonify

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    if username == "admin" and password == "password":  # Replace with real authentication logic
        return jsonify({"message": "Login successful", "token": "mocked_jwt_token"}), 200

    return jsonify({"error": "Invalid credentials"}), 401
