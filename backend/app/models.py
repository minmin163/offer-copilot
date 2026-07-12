from pydantic import BaseModel


class User(BaseModel):
    id: int
    name: str
    email: str


class Resume(BaseModel):
    id: int
    user_id: int
    content: str


class Job(BaseModel):
    id: int
    title: str
    company: str
    description: str


class MatchResult(BaseModel):
    score: int
    strengths: list[str]
    weaknesses: list[str]
    suggestions: list[str]


class InterviewQuestion(BaseModel):
    question: str
    answer: str


class Application(BaseModel):
    id: int
    user_id: int
    company: str
    position: str
    status: str
    result: str
    created_at: str
    updated_at: str


class InterviewEvent(BaseModel):
    id: int
    application_id: int
    event_type: str
    event_time: str
    notes: str
    reminder: str
