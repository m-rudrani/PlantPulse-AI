import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", "default_secret")
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL", "sqlite:///database.db")
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # WatsonX API Keys & URLs
    IBM_WATSONX_API_KEY = os.getenv("IBM_WATSONX_API_KEY")
    IBM_WATSONX_TEXT_ENDPOINT = "https://us-south.ml.cloud.ibm.com/ml/v1/deployments/b91bde99-2f59-415d-9532-b67d73a2d934/text/generation?version=2021-05-01"
    IBM_WATSONX_STREAM_ENDPOINT = "https://us-south.ml.cloud.ibm.com/ml/v1/deployments/b91bde99-2f59-415d-9532-b67d73a2d934/text/generation_stream?version=2021-05-01"
