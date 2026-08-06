import os
from dotenv import load_dotenv
from supabase import Client, create_client

load_dotenv()

SUPABASE_URL = os.getenv("URL")
SUPABASE_KEY = os.getenv("KEY")

supabase: Client = create_client(
    SUPABASE_URL,
    SUPABASE_KEY
)