from fastapi import APIRouter
from pydantic import BaseModel
from database import supabase

router_auth = APIRouter()


class Register(BaseModel):
    email: str
    password: str


class Login(BaseModel):
    email: str
    password: str


@router_auth.post("/register")
def register(user: Register):

    result = supabase.auth.sign_up(
        {
            "email": user.email,
            "password": user.password,
        }
    )

    return result


@router_auth.post("/login")
def login(user: Login):

    result = supabase.auth.sign_in_with_password(
        {
            "email": user.email,
            "password": user.password,
        }
    )

    return {
        "access_token": result.session.access_token,
        "refresh_token": result.session.refresh_token,
        "user": result.user
    }