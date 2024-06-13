require("module-alias/register");

const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

require("dotenv").config();

app.use(cors());

const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  },
});

console.log("io from server: ", io.emit);
io.on("connection", (socket) => {
  console.log("New client connected", socket.id);

  socket.on("disconnect", () => {
    console.log("Client disconnected", socket.id);
  });

  socket.on("testEvent", (data) => {
    console.log("Received testEvent with data:", data);
    socket.emit("testResponse", {
      message: "Test event received successfully",
    });
  });
});

app.use(bodyParser.json());

require("./src/utils/route.utils")(app);

app.get("/", (req, res) => {
  res.send("Server is running " + io.emit);
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Export the io object for use in the controllers
// console.log(" io : ", io);
