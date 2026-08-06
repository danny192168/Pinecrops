from fastapi import Header, HTTPException
from database import supabase

def current_user(authorization: str = Header(...)):

    token = authorization.replace("Bearer ", "")

    user = supabase.auth.get_user(token)

    if user.user is None:
        raise HTTPException(401)

    return user.user