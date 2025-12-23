import axios from "axios";

// Simple Axios instance with base URL
const api = axios.create({
  baseURL: "http://localhost:3000", // backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
