import axios from "axios";

export const axiosInstance = axios.create({
  // 🚀 FIXED: Pointing exactly to your Render backend
  baseURL: import.meta.env.MODE === "development" 
    ? "http://localhost:5001/api" 
    : "https://zapchat-backend-o9ap.onrender.com/api", 
  withCredentials: true,
});