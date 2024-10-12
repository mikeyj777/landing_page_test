import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv


from routes.subscribe import subscribe

import logging
logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')

# Load environment variables
load_dotenv()

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": ["http://landing-page.riskspace.net", "http://localhost:3000"]}})


@app.route('/api/subscribe', methods=['POST'])
def subscribe():
  data = request.json
  resp = subscribe(data)
  return resp

if __name__ == '__main__':
  app.run(debug=True)