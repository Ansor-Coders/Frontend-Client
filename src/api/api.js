import axios from "axios";

const baseURL = "https://ansor-crm.onrender.com/api"; 
const api = axios.create({
  baseURL,
});

export default api;
