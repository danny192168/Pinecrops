
from fastapi import APIRouter, Depends
from database import supabase
from auth_tools import current_user
from models import OrderProduct

router_crud = APIRouter()

@router_crud.post("/orders_cart")
def add_order(order: OrderProduct, user = Depends(current_user)):

    supabase.table("orders_cart").insert(
        {
            "name": order.name,
            "quantitiy": order.quantitiy,
            "uuid": user.id,
            "description": order.description,
            "price": order.price
        }
    ).execute()

    return {"success": True}


@router_crud.get("/orders")
def get_orders(user = Depends(current_user)):

    response = (
        supabase
        .table("orders_cart")
        .select("*")
        .execute()
    )

    return response.data