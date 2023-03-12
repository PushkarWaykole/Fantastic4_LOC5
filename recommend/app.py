# flask_ngrok_example.py
from flask import Flask,request,jsonify
import json



app = Flask(__name__)
 # Start ngrok when app is run
import pandas as pd


import numpy as np



@app.route("/")
def home():
    return "Hello, World!"

@app.route("/about")
def home1():
    return "This is an api to return json objects."


@app.route("/recommend",methods=['GET','POST'])
def hello():
    
    if(request.method=='POST'):
        
        incart=request.json
        if incart:
            incart=incart["incart"]
            recommendation =[]
            api={"bread":["milk","egg"],"egg":["bread"],"milk":["chocolate","biscuit","cheese"],"chocolate":["milk"],"biscuit":["milk","chocolate"],"juice":["sugar","salt"],"cheese":["milk"],"sause":["bread"],"sugar":["milk","juice"],"salt":["egg"],"laptop":["mouse","keyboard","mousepad"],"mouse":["mousepad"],"keyboard":["mouse","mousepad"],"mousepad":["mouse"],"monitor":["keyboard"],"powerbank":["mobile"],"mobile":["earphone","powerbank"],"earphone":["mobile"],"watch":["earphone"],"camera":["powerbank"]}
            for i in incart:
                        recommendation.append(api[i])
            recommendation=[j for sub in recommendation for j in sub]
            recommendation=list(set(recommendation)-set(incart))

            dictionary ={ } 
            dictionary ["recommendation"]=recommendation
            json_object = json.dumps(dictionary)
            
            return json_object  

    
    # return jsonify(data)
if __name__ == '__main__':
   app.run(debug = True)