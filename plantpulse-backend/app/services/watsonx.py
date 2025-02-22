import requests
import base64
from ..config import Config

def get_auth_token():
    """Retrieve IBM WatsonX IAM Token"""
    url = "https://iam.cloud.ibm.com/identity/token"
    headers = {"Content-Type": "application/x-www-form-urlencoded"}
    data = {
        "grant_type": "urn:ibm:params:oauth:grant-type:apikey",
        "apikey": Config.IBM_WATSONX_API_KEY
    }
    response = requests.post(url, headers=headers, data=data)
    return response.json().get("access_token")

def identify_plant(image_data):
    """Identify plant species using WatsonX model"""
    encoded_image = base64.b64encode(image_data).decode("utf-8")
    token = get_auth_token()
    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json"
    }
    payload = {
        "input": f"Identify this plant: {encoded_image}"
    }
    
    response = requests.post(Config.IBM_WATSONX_TEXT_ENDPOINT, json=payload, headers=headers)
    return response.json().get("generated_text", "Unknown plant")

def assess_plant_health(image_data):
    """Assess plant health using WatsonX model"""
    encoded_image = base64.b64encode(image_data).decode("utf-8")
    token = get_auth_token()
    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json"
    }
    payload = {
        "input": f"Assess the health of this plant: {encoded_image}"
    }

    response = requests.post(Config.IBM_WATSONX_TEXT_ENDPOINT, json=payload, headers=headers)
    result = response.json()
    return result.get("generated_text", "Unknown health status")
