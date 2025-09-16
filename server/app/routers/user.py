from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db
from app.schema.user import UserCreate, UserRead
from app.crud.user import create_user, get_user_by_id, get_users

router = APIRouter()

@router.post("/", response_model=UserCreate)
async def user_crete_route(user:UserCreate, db:AsyncSession = Depends(get_db)):
    return await create_user(db, user_in=user)


@router.get("/", response_model=list[UserRead])
async def all_users_get_route(db:AsyncSession=Depends(get_db)):
    return get_users(db)

@router.get("/{user_id}", response_model=UserCreate)
async def get_single_user_by_id_route(user_id:int, db:AsyncSession=Depends(get_db)):
    return await get_user_by_id(user_id=user_id, db=db)