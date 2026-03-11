import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5001; // Fallback port
const __dirname = path.resolve();

app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

// 🚀 FIX 1: Production CORS Configuration
const allowedOrigins = [
  "http://localhost:5173",
  "https://your-zapchat-frontend.vercel.app", // 👈 Yahan apna ZapChat Vercel link dalo
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS Error: Origin not allowed"));
      }
    },
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// 🚀 FIX 2: Static Path for Render/Vercel
if (process.env.NODE_ENV === "production") {
  // Production mein aksar frontend aur backend ek hi folder structure mein hote hain
  app.use(express.static(path.join(__dirname, "frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
  });
}

server.listen(PORT, () => {
  console.log("🚀 ZapChat Server is running on PORT: " + PORT);
  connectDB();
});