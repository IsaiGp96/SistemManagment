import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhostÑ8080/api",
    headers:{
        "Content-Type": "aplication/json",
    },
});

export default api;