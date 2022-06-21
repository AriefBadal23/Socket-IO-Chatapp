from flask_socketio import SocketIO
from flask import Flask, render_template
app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/chat')
def chat():
    return render_template('chat.html')

@socketio.on('connect')
def test_connect():
    socketio.emit('my response', {'data': 'Connected'})



if __name__ == '__main__':
    socketio.run(app, debug=True)