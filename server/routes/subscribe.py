from flask import Flask, request, jsonify

import psycopg2
from psycopg2 import sql

from utils import get_db_connection

def subscribe(data):
  first_name = data.get('firstName')
  email = data.get('email')

  if not first_name or not email:
    return jsonify({"error": "First name and email are required"}), 400

  conn = get_db_connection()
  cur = conn.cursor()

  try:
    cur.execute(
      sql.SQL("INSERT INTO subscribers (first_name, email) VALUES (%s, %s)"),
      (first_name, email)
    )
    conn.commit()
    return jsonify({"message": "Subscription successful"}), 201
  except psycopg2.IntegrityError:
    conn.rollback()
    return jsonify({"error": "Email already exists"}), 409
  except Exception as e:
    conn.rollback()
    return jsonify({"error": str(e)}), 500
  finally:
    cur.close()
    conn.close()