import axios from "axios";

export const axiosInstance = axios.create({
  // 🚀 FIX: baseURL mein backend URL + /api hona zaroori hai
  baseURL: import.meta.env.MODE === "development" 
    ? "http://localhost:5001/api" 
    : "https://your-zapchat-backend.onrender.com/api", // 👈 APNA RENDER URL YAHAN DALO
  withCredentials: true,
});