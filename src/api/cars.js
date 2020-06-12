import axios from "axios";

const apiUrls = "https://car-rentals-api.herokuapp.com";

export const apiFeatchCar = () => {
  return axios.get(apiUrls + "/v1/getcar");
};

export const apiAddCar = (car) => {
  return axios.post(apiUrls + "/v1/addcar", car);
};

export const apiFetchCarType = () => {
  return axios.get(apiUrls + "/v1/carType");
};

export const apifetchCarByTypes = (id) => {
  return axios.post(apiUrls + `/v1/fetchByTypes/${id}`, id);
};

export const apiFetchCategory = () => {
  return axios.get(apiUrls + "/v1/fetchCategory");
};

export const apiFetchMyCars = (id) => {
  return axios.post(apiUrls + `/v1/fetchCarByUserId/${id}`, id);
};

export const apiFetchOffer = () => {
  return axios.get(apiUrls + "/v1/fetchOffer");
};

export const apiDeleteCar = (id) => {
  return axios.delete(apiUrls + `/v1/deleteCar/${id}`, id);
};

export const apiUpdateCar = (car, id) => {
  return axios.put(apiUrls + `/v1/updateCar/${id}`, car);
};

export const apiAddOffer = (car) => {
  return axios.post(apiUrls + "/v1/addOffer", car);
};

export const apiFetchMyOffer = (id) => {
  return axios.post(apiUrls + `/v1/fetchOfferById/${id}`, id);
};

export const apiDeleteOffer = (id) => {
  return axios.delete(apiUrls + `/v1/deleteOffer/${id}`, id);
};
