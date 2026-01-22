import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:8000/api",
  baseURL: "https://notes-lc6l.onrender.com/api",
  withCredentials: true,
});

export default api;
