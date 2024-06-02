import os
from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session, jsonify
from flask_cors import CORS
from flask_session import Session
from werkzeug.security import check_password_hash, generate_password_hash
from werkzeug.middleware.dispatcher import DispatcherMiddleware

from helpers import lookup
from rebalance import rebalance

# Set the environment variable
os.environ["FLASK_ENV"] = "development"

app = Flask(__name__)
CORS(app)

@app.route("/api/python")
def hello_world():
    return jsonify(data="Hello World!!!!")

@app.route("/api/python/lookup", methods=["POST", "GET"])
def flask_lookup():
    if request.method == "POST":
        data = request.json  # Get JSON data from request

        # Check if symbol is provided
        symbol = data.get("symbol") if data else None
        if not symbol:
            return jsonify({"error": "No symbol provided"}), 400

        stock_data = lookup(symbol)
        return jsonify(stock_data)

@app.route("/api/python/rebalance", methods=["POST"])
def flask_rebalance():
    if request.method == "POST":
        data = request.json

        # Verify if stocks data is provided
        if 'stocks' not in data:
            return jsonify({"error": "No stocks data provided"}), 400

        stocks = data['stocks']
        rebalance_data = rebalance(stocks)
        return jsonify(rebalance_data)

# For Vercel
def create_app():
    return app

# Main block
if __name__ != "__main__":
    app = DispatcherMiddleware(app, {
        '/api/python': create_app()
    })

if __name__ == "__main__":
    app.run(debug=True)
