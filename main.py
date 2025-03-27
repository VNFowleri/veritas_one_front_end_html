# main.py
from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='frontend')

# Serve the frontend
@app.route('/')
def serve_index():
    return send_from_directory('frontend', 'index.html')

@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory('frontend', filename)

# Your backend routes
@app.route('/api/data', methods=['GET'])
def get_data():
    return {"message": "Hello from the backend!"}

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)