const express = require('express');
const app = express()
app.use(express.static('public'))
const http = require('http')
const server = http.createServer(app);
const { Server } = require("socket.io")

// Create new instance of socket.io and pass the server object
const io = new Server(server)

// route for the home page while serving the index.html page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
  });



server.listen(3000, () => {
    console.log('listening on *3000');
    console.log('Server is running!');

});



