import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status) {
      if (error.response.status === 401) {
        try {
          const result = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/reissue`, null, { withCredentials: true });
          if (result.status == 200 || result.status == 201) {
            return instance(error.config);
          }
        } catch (e) {
          window.location.href = "/login";
          // return Promise.reject(error);
        }
      }
      if (error.response && error.response.status >= 400 && error.response.status < 500) {
        return error.response;
      }
      return Promise.reject(error);
    }

    return Promise.reject(error);
  },
);

export default instance;
