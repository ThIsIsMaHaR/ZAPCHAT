import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "https://zapchat-wine.vercel.app"],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// 🚀 FIXED: Ye function export karna zaroori hai message.controller.js ke liye
export const getReceiverSocketId = (userId) => {
  return userSocketMap[userId];
};

// Online users ko track karne ke liye map
const userSocketMap = {}; // {userId: socketId}

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId && userId !== "undefined") {
    userSocketMap[userId] = socket.id;
  }

  // Sabko batao kaun kaun online hai
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };