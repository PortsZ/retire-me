import csv
import datetime
import pytz
import requests
import subprocess
import urllib
import uuid
import pandas as pd
import yfinance as yf

from flask import redirect, render_template, session
from functools import wraps

# def lookup(symbol):
#     """Look up quote for symbol."""
    
    

#     # Prepare API request
#     symbol = symbol.upper()
#     end = datetime.datetime.now(pytz.timezone("US/Eastern"))
#     start = end - datetime.timedelta(days=7)

#     # Yahoo Finance API
#     url = (
#         f"https://query1.finance.yahoo.com/v7/finance/download/{urllib.parse.quote_plus(symbol)}"
#         f"?period1={int(start.timestamp())}"
#         f"&period2={int(end.timestamp())}"
#         f"&interval=1d&events=history&includeAdjustedClose=true"
#     )

#     print("URL: ", url)
#     # Query API
#     try:
#         response = requests.get(
#             url,
#             cookies={"session": str(uuid.uuid4())},
#             headers={"User-Agent": "python-requests", "Accept": "*/*"},
#         )
#         response.raise_for_status()
#         print("DEBUG RESPONSE: ", response.content.decode("utf-8").splitlines())
        
        

#         # CSV header: Date,Open,High,Low,Close,Adj Close,Volume
#         quotes = list(csv.DictReader(response.content.decode("utf-8").splitlines()))
#         quotes.reverse()

#         price = round(float(quotes[0]["Adj Close"]), 2)
        
#         print("DEBUGa: ", price, quotes, response)
        
#         return {"name": symbol, "price": price, "symbol": symbol}
#     except requests.RequestException as e:
#         print(f"RequestException: {e}")
#         return None
#     except ValueError as e:
#         print(f"ValueError: {e}")
#         return None
#     except KeyError as e:
#         print(f"KeyError: {e}")
#         return None
#     except IndexError as e:
#         print(f"IndexError: {e}")
#         return None
#     except Exception as e:
#         print(f"Unexpected error: {e}")
#         return None


def lookup(symbol):
    """Look up quote for symbol."""

    # Prepare API request
    symbol = symbol.upper()
    end = datetime.datetime.now(pytz.timezone("US/Eastern"))
    start = end - datetime.timedelta(days=7)
    
    
    try:
        # Fetch historical data
        data = yf.download(symbol, start=start.date(), end=end.date(), interval="1d")
        
        if data.empty:
            print(f"No data found for symbol: {symbol}")
            return None

        # Get the most recent adjusted closing price
        latest_quote = data.iloc[-1]
        price = round(latest_quote['Adj Close'], 2)

        
        return {"name": symbol, "price": price, "symbol": symbol}
    except Exception as e:
        print(f"Error fetching data for {symbol}: {e}")
        return None


def usd(value):
    """Format value as USD."""
    return f"${value:,.2f}"
