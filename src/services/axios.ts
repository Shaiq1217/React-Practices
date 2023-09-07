import axios from "axios";

const apiClient = (url: string, method = "get", data = {}) => {
  const baseURL = process.env.REACT_APP_API_HOST;
  const config = {
    url: url,
    method: method,
    baseURL: baseURL,
  };
  if (method.toLocaleLowerCase() === "get") {
    config["params"] = data;
  } else {
    config["data"] = data;
  }

  const token = localStorage.getItem("token");

  axios.interceptors.request.use((config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${localStorage.token}`;
    }
    return config;
  });

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 409) {
        return Promise.reject(error);
      } else if (error.response.status === 401) {
        window.location = "/login";
        return Promise.reject(error);
      } else if (error.response.status === 403) {
        return Promise.reject(error);
      } else if (error.response.status === 429) {
        return Promise.reject(error);
      } else if (error.response.status === 422) {
        return Promise.reject(error);
      }
    }
  );
  return axios(config);
};

export default apiClient;
