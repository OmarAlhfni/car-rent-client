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
} from "../actions/types";

const INITIAL_STATE = {
  car: [],
  carType: [],
  typeOfCar: [],
  category: [],
  myCars: [],
  offers: [],
  activeItem: {},
  bookingItem: {},
  myOffer: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FEATCH_CARS:
      return { ...state, car: action.payload };
    case FETCH_CAR_TYPE:
      return { ...state, carType: action.payload };
    case FETCH_BY_TYPE:
      return { ...state, typeOfCar: action.payload };
    case FETCH_BY_TYPE_To_V:
      return { ...state, car: action.payload };
    case FETCH_CATEGORY:
      return { ...state, category: action.payload };
    case FETCH_MY_CARS:
      return { ...state, myCars: action.payload };
    case FETCH_OFFER:
      return { ...state, offers: action.payload };
    case FETCH_MY_OFFER:
      return { ...state, myOffer: action.payload };

    case SET_ACTIVE_ITEM:
      return { ...state, activeItem: action.payload };

    case SET_BOOKING_ITEM:
      return { ...state, bookingItem: action.payload };
    default:
      return state;
  }
};
