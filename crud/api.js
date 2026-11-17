import axios from "axios";

const api = axios.create({
    baseURL: "https://c59b-177-101-138-242.ngrok-free.app"
});
 
export default api;