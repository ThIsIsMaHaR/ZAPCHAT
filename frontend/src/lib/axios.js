import axios from "axios";

export const axiosInstance = axios.create({
  // 🚀 FIX: baseURL mein /api suffix hona chahiye backend routes se match karne ke liye
  baseURL: import.meta.env.MODE === "development" 
    ? "http://localhost:5001/api" 
    : "https://zapchat-backend-abhishek.onrender.com/api", // 👈 Apna Render Backend URL yahan dalo
  withCredentials: true,
});