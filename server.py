from wsgi import app
import socketio

# Create instance of socketio.Server
sio = socketio.Server()

# Serving static files
static_files = {
    '/' : 'index.html',
    '/static/index.js' : '/static/index.js',
    'static/style.css' : 'static/style.css',
}



# Wrap with a WSGI application
app= socketio.WSGIApp(sio, app)



