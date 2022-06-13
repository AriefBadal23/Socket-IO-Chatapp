from wsgi import app
import socketio

# Create instance of socketio.Server
sio = socketio.Server()

# Wrap with a WSGI application in this case a Flask application
app= socketio.WSGIApp(sio, app)

@sio.event
def connect(sid):
    print('connect', sid)

@sio.event()
def disconnect(sid):
    print(sid, 'disconnected')
