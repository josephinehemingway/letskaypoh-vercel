from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_pymongo import PyMongo
from pymongo import MongoClient
from flask_cors import CORS
from dotenv import dotenv_values

app = Flask(__name__)

# CORS(app)

config = dotenv_values(".env")
# app.config['MONGO_URI'] = config['ATLAS_URI']
# f"mongodb://localhost:27017/{config["DB_NAME"]}"
client = MongoClient(config['ATLAS_URI'])
db = client[config['DB_NAME']]

# app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///mydatabase.db"
# app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# db = SQLAlchemy(app)