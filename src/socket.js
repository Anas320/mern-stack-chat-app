// // const socketIo = require("socket.io");
// const { server } = require("../server");

// // const io = socketIo(server, {
// //   cors: {
// //     origin: "http://localhost:3000",
// //     methods: ["GET", "POST"],
// //     allowedHeaders: ["Content-Type", "Authorization"],
// //     credentials: true,
// //   },
// // });

// const io = require("socket.io")(4000, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//   },
// });
// console.log("io : ", io.on);
// io.on("connection", (socket) => {
//   console.log("New client connected", socket.id);

//   socket.on("disconnect", () => {
//     console.log("Client disconnected", socket.id);
//   });

//   socket.on("testEvent", (data) => {
//     console.log("Received testEvent with data:", data);
//     socket.emit("testResponse", {
//       message: "Test event received successfully",
//     });
//   });
// });

// module.exports = io;
