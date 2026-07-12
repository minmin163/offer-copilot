from fastapi import FastAPI

app = FastAPI(
    title="Offer Copilot API",
    description="AI career assistant backend",
    version="0.1.0"
)


@app.get("/")
def root():
    return {
        "message": "Welcome to Offer Copilot API"
    }
