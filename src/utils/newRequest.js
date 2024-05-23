import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://backend-aihire.vercel.app/api/",
  withCredentials: true,
});

export default newRequest;