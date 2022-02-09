import {
  apiFetchCar,
  apiAddCar,
  apiFetchCarType,
  apiFetchCarByTypes,
  apiFetchCategory,
  apiFetchMyCars,
  apiFetchOffer,
  apiDeleteCar,
  apiUpdateCar,
  apiAddOffer,
  apiFetchMyOffer,
  apiDeleteOffer,
} from "../api/cars";
import {
  FEATCH_CARS,
  FETCH_CAR_TYPE,
  FETCH_BY_TYPE,
  FETCH_CATEGORY,
  FETCH_MY_CARS,
  FETCH_OFFER,
  SET_ACTIVE_ITEM,
  SET_BOOKING_ITEM,
  FETCH_BY_TYPE_To_V,
  FETCH_MY_OFFER,
} from "./types";

import { apiFetchOwner } from "../api/owner";

// fetch cars
export const fetchCar = () => {
  return async (dispatch) => {
    try {
      const { data } = await apiFetchCar();
      dispatch({ type: FEATCH_CARS, payload: data.cars });
    } catch (e) { }
  };
};

// add car
export const addCar = (add) => {
  return async (dispatch) => {
    try {
      await apiAddCar(add);
    } catch (e) {
      console.log(e);
    }
  };
};

// fetch type
export const fetchCarType = () => {
  return async (dispatch) => {
    try {
      const { data } = await apiFetchCarType();
      dispatch({ type: FETCH_CAR_TYPE, payload: data.carType });
    } catch (error) {
      console.log(error);
    }
  };
};

// fetch car by type
export const fetchCarByType = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await apiFetchCarByTypes(id);
      dispatch({ type: FETCH_BY_TYPE, payload: data.car });
    } catch (e) {
      console.log(e);
    }
  };
};

// fetch car by type to vehicles
export const fetchCarByTypeToVehicles = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await apiFetchCarByTypes(id);
      dispatch({ type: FETCH_BY_TYPE_To_V, payload: data.car });
    } catch (e) {
      console.log(e);
    }
  };
};

// Fetch Category
export const fetchCategory = () => {
  return async (dispatch) => {
    try {
      const { data } = await apiFetchCategory();
      dispatch({ type: FETCH_CATEGORY, payload: data.Category });
    } catch (e) {
      console.log(e);
    }
  };
};

// fetch my cars
export const fetchMyCars = () => {
  return async (dispatch) => {
    try {
      const {
        data: { owner },
      } = await apiFetchOwner();
      // console.log(owner.id);

      const {
        data: { car },
      } = await apiFetchMyCars(owner.id);
      dispatch({ type: FETCH_MY_CARS, payload: car });
    } catch (e) {
      console.log(e);
    }
  };
};

// fetch offer cars
export const fetchOffer = () => {
  return async (dispatch) => {
    try {
      const {
        data: { offer },
      } = await apiFetchOffer();
      dispatch({ type: FETCH_OFFER, payload: offer });
    } catch (e) { }
  };
};

// delete cars
export const deleteCar = (id) => {
  return async (dispatch) => {
    try {
      await apiDeleteCar(id);
    } catch (e) {
      console.log(e);
    }
  };
};

// update
export const updateCar = (car, id) => {
  return async (dispatch) => {
    try {
      await apiUpdateCar(car, id);
    } catch (e) {
      console.log(e);
    }
  };
};

// Add Offer
export const addOffer = (add) => {
  return async (dispatch) => {
    try {
      await apiAddOffer(add);
    } catch (e) {
      console.log(e);
    }
  };
};

// fetch my offer
export const fetchMyOffer = () => {
  return async (dispatch) => {
    try {
      const {
        data: { owner },
      } = await apiFetchOwner();


      const {
        data: { offer },
      } = await apiFetchMyOffer(owner.id);
      dispatch({ type: FETCH_MY_OFFER, payload: offer });
    } catch (e) {
      console.log(e);
    }
  };
};

// delete offer
export const deleteOffer = (id) => {
  return async (dispatch) => {
    try {
      await apiDeleteOffer(id);
    } catch (e) {
      console.log(e);
    }
  };
};

// set item to edit
export const setActiveItem = (payload) => ({ type: SET_ACTIVE_ITEM, payload });

// set item Car to booking
export const setBookingItem = (payload) => ({
  type: SET_BOOKING_ITEM,
  payload,
});
