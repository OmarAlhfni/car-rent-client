import axios from "axios";

const apiUrls = "https://car-rentals-api.herokuapp.com";

export const apiLogin = (owner) => {
  return axios.post(apiUrls + "/v1/login", owner);
};

export const apiFetchOwner = () => {
  return axios.get(apiUrls + "/v1/profile");
};

export const apiRegister = (data) => {
  return axios.post(apiUrls + "/v1/registerOwner", data);
};

export const apiAddComment = (data) => {
  return axios.post(apiUrls + "/v1/addComment", data);
};
