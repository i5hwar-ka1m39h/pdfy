from sqlalchemy.orm import DeclarativeBase, mapped_column, Mapped
from sqlalchemy import String, Integer


class Base(DeclarativeBase):
    pass

class User(Base):
    __tablename__ = "users"
    id : Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    name : Mapped[str] = mapped_column(String, nullable=False)
    email : Mapped[str] = mapped_column(String, nullable=False, unique=True)


