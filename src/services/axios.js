import axios from "axios";
import cookies from "vue-cookies";

axios.defaults.withCredentials = true;

const errors = [503];
const service = axios.create({
  baseURL: process.env.VUE_APP_DEPLOY_URL,
  headers: {
    "X-Requested-With": "XMLHTTPRequest"
  }
});

service.interceptors.response.use(
  response => {
    return Promise.resolve(response);
  },
  err => {
    if (err.response) {
      if (err.response.status === 401) {
        cookies.remove("refresh_token");
        window.localStorage.clear();
        window.location.reload();
      }
      if (errors.includes(err.response.status)) {
        window.location.reload();
      }
    }
    return Promise.reject(err);
  }
);

export default service;
