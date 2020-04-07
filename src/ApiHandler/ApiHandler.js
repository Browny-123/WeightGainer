import axios from "axios";

class ApiHandler {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:8000",
      withCredentials: true,
    });
  }

  get(route, query) {
    return this.api.get(route, query);
  }

  post(route, info, config) {
    return this.api.post(route, info, config);
  }
}

export default ApiHandler;
