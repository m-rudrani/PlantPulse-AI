import requests
import base64
import os
from ..config import Config

def identify_plant(image_data):
    encoded_image = base64.b64encode(image_data).decode("utf-8")
    headers = {
        "Authorization": f"Bearer {Config.IBM_WATSONX_API_KEY}",
        "Content-Type": "application/json"
    }
    payload = {
        "model_id": "granite-13b-instruct-v2",
        "input": f"Identify this plant: {encoded_image}"
    }

    response = requests.post(Config.IBM_WATSONX_URL, json=payload, headers=headers)
    return response.json().get("output", "Unknown plant")

def assess_plant_health(image_data):
    encoded_image = base64.b64encode(image_data).decode("utf-8")
    headers = {
        "Authorization": f"Bearer {Config.IBM_WATSONX_API_KEY}",
        "Content-Type": "application/json"
    }
    payload = {
        "model_id": "granite-13b-instruct-v2",
        "input": f"Assess the health of this plant: {encoded_image}"
    }

    response = requests.post(Config.IBM_WATSONX_URL, json=payload, headers=headers)
    return response.json().get("health_status", "Unknown"), response.json().get("recommendations", "No recommendations")
