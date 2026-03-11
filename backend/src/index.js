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

// 🚀 FIXED CORS
app.use(
  cors({
    origin: ["http://localhost:5173", "https://zapchat-wine.vercel.app"],
    credentials: true,
  })
);

// API Routes (Ye hamesha static files se upar hone chahiye)
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// 🚀 FINAL PRODUCTION PATH FIX
if (process.env.NODE_ENV === "production") {
  // Pehle check karo ki dist folder mil raha hai
  const frontendPath = path.join(__dirname, "frontend", "dist");
  app.use(express.static(frontendPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
} else {
  // Agar production nahi hai toh basic message dikhao taki "Cannot GET /" na aaye
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

server.listen(PORT, () => {
  console.log("🚀 ZapChat Server running on PORT: " + PORT);
  connectDB();
});