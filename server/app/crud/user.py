from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.models.user import User
from app.schema.user import UserCreate

async def create_user(db:AsyncSession, user_in:UserCreate)->User:
    user = User(name= user_in.name, email= user_in.email)
    db.add(user)
    await db.commit()
    await db.refresh(user)
    return user


async def get_users(db:AsyncSession)->list[User]:
    result = await db.execute(select(User))
    return list(result.scalars().all())

async def get_user_by_id(db:AsyncSession, user_id:int)->User | None:
    result = await db.execute(select(User).where(User.id==user_id))
    return result.scalar_one_or_none()