import axios from "axios";



const baseURL = "http://localhost:4000/api/v1";
// const baseURL = "api/v1";

const api = axios.create({
    baseURL,
});

export default api;