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

const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

// 🚀 CONFIG: Production CORS (Whitelist your frontend)
const allowedOrigins = [
  "http://localhost:5173",
  "https://abhisheks-zapchat.vercel.app", // 👈 Yahan apna ZapChat Vercel link dalo
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

// Routes configuration
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Static files for Production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
  });
}

server.listen(PORT, () => {
  console.log("🚀 ZapChat Server running on PORT: " + PORT);
  connectDB();
});