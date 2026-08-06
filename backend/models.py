from pydantic import BaseModel

class OrderProduct(BaseModel):
    name: str
    quantity: int
    description: str
    price: int