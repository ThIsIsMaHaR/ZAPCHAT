import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    // 🚀 FIXED: ZapChat Vercel link ko allow karna zaroori hai
    origin: ["http://localhost:5173", "https://zapchat-wine.vercel.app"],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

export { app, io, server };