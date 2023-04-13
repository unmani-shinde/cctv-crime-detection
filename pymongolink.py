import pymongo
from flask import Flask,request,jsonify
from datetime import datetime
import json
from flask_cors import CORS


app = Flask(__name__)
CORS(app,resources={r"/*": {"origins": "http://localhost:3000"}})

# establish a connection to the MongoDB server
client = pymongo.MongoClient("mongodb://127.0.0.1:27017/Crime")

# create a new database and collection
mydb = client["Crime"]
mycol = mydb["crimescenes"]

default_date=datetime.now()

@app.route("/crimedetails",methods=['POST'])
def handle_data():
    if request.method == 'POST':
        data = request.get_json()
        record = {
            'location': data['location'],
            'description': data['description'],
            'timestamp': default_date
        }
        result = mycol.insert_one(record)
        return jsonify({'id': str(result.inserted_id)}), 201
    

if __name__ == "__main__":
    app.run(debug=True)
