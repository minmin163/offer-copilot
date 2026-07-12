from pydantic import BaseModel


class User(BaseModel):
    id: int
    name: str
    email: str


class Resume(BaseModel):
    id: int
    user_id: int
    content: str
