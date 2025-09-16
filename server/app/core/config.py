from pydantic_settings import BaseSettings
from sqlalchemy.ext.asyncio import create_async_engine
from sqlalchemy import pool

class Settings(BaseSettings):
    DATABASE_URL :str = ""
    def async_engine(self):
        
        return create_async_engine(self.DATABASE_URL, echo=False, poolclass=pool.NullPool)

settings = Settings()