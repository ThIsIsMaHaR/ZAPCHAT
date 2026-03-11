import axios from "axios";

export const axiosInstance = axios.create({
  // 🚀 FIX: Production mein relative path "/" ki jagah full Render URL chahiye
  baseURL: import.meta.env.MODE === "development" 
    ? "http://localhost:5001/api" 
    : "https://your-zapchat-backend.onrender.com/api", 
  withCredentials: true,
});