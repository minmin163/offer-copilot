from fastapi import APIRouter, UploadFile, File

router = APIRouter()


@router.get("/health")
def health_check():
    return {
        "status": "ok",
        "service": "Offer Copilot API"
    }


@router.post("/resume/upload")
async def upload_resume(file: UploadFile = File(...)):
    return {
        "filename": file.filename,
        "message": "Resume uploaded successfully"
    }
