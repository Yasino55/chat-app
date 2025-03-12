import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000/api",
  baseURL: import.meta.env.VITE_MODE === "development" ? apiUrl : "/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
