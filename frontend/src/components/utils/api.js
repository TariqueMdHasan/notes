import axios from "axios";

const api = axios.create({
  baseURL: "https://notes-lc6l.onrender.com/api",
  withCredentials: true,
});

export default api;
