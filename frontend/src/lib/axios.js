import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "https://talkify-19ig.onrender.com/api"
      : "/api",
  withCredentials: true,
});
