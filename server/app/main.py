from fastapi import FastAPI
from app.models.user import Base
from app.core.database import engine
from app.routers import user
from contextlib import asynccontextmanager

@asynccontextmanager
async def lifespan(app:FastAPI):
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    print("Start up done.")

    yield

    await engine.dispose()
    print("Database connection closed")



app = FastAPI(lifespan=lifespan)

app.include_router(user.router, prefix="/users", tags=["users"])

