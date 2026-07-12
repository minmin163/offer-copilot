from fastapi import FastAPI
from app.api import routes


app = FastAPI(
    title="Offer Copilot API",
    description="AI career assistant backend",
    version="0.1.0"
)


app.include_router(routes.router)


@app.get("/")
def root():
    return {
        "message": "Welcome to Offer Copilot API"
    }
