const express = require("express");
const app = express();
app.use(express.static("public"));
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

// io = is de server instance
// Create new instance of socket.io and pass the server object
const io = new Server(server);

// route for the home page while serving the index.html page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// While there is a connection made with the socket listen on new message events
//  and send them to the client.

io.on("connection", (socket) => {
  socket.on("chat message", (message) => {
    io.emit("chat message", message);


    // Listen for a disconnect event and log a message if the client is disconnected
    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
});

server.listen(3000, () => {
  console.log("listening on *3000");
  console.log("Server is running!");
});
