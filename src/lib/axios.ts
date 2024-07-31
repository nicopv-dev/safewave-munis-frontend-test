import axios from "axios";

const api = axios.create({
  baseURL: "https://munis-backend-test-xf3zkbyvwa-tl.a.run.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
