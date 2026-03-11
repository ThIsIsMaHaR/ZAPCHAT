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

// 🚀 MIDDLEWARE
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

// 🚀 FIXED CORS: Dedicated for your Vercel URL
app.use(
  cors({
    origin: "https://zapchat-wine.vercel.app",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Cookie"],
  })
);

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// 🚀 PRODUCTION STATIC FILES LOGIC
if (process.env.NODE_ENV === "production") {
  // Render ke folder structure ke hisaab se absolute path
  const frontendPath = path.join(__dirname, "frontend", "dist");
  
  app.use(express.static(frontendPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"), (err) => {
      if (err) {
        // Agar dist folder nahi mil raha toh API mode mein error na de
        res.status(200).json({ message: "API is Live. Frontend build not served from Backend." });
      }
    });
  });
} else {
    app.get("/", (req, res) => {
        res.send("Server is running in Development mode...");
    });
}

// 🚀 SERVER LISTEN
server.listen(PORT, () => {
  console.log("🚀 ZapChat Server running on PORT: " + PORT);
  connectDB();
});