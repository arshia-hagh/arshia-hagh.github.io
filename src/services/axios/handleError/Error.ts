import { reqApi } from "../configs/Configs";

reqApi.interceptors.request.use(
  (requset) => {
    console.log("Success", requset);
    return requset;
  },
  (err) => {
    console.log("Failed", err);
    return Promise.reject(err);
  }
);
reqApi.interceptors.response.use(
  (response) => {
    return response
  },
  (err) => {
    return Promise.reject(err);
  }
);
