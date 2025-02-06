const express = require("express");
const app = express();
const path = require("path");
const socket = require("socket.io");
const http = require("http");

const server = http.createServer(app);
const io = socket(server);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

io.on("connection", (socket) => {
  console.log("connected user", socket.id);
  //sending location that was stored in the socket server to client side
  socket.on("send-location", (data) => {
    console.log("Location received from", socket.id, data);
    io.emit("receive-location", { id: socket.id, ...data });
    console.log("connected");

    //when the user is disconnet
    socket.on("disconnect", () => {
      io.emit("user-disconnected", socket.id);
    });
  });
});

server.listen(3000, (err) => {
  console.log("Server is running on port 3000" || err);
});
