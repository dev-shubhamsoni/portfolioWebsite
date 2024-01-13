import axios from "axios";



// const baseURL = "http://localhost:4000/api/v1"

const baseURL =
    process.env.NODE_ENV ===
        "production" ? "api/v1" :
        "http://localhost:4000/api/v1";

const api = axios.create({
    baseURL,
});

export default api;