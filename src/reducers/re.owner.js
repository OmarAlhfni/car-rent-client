import {
  AUTH_ATTEMPTING,
  AUTH_SUCCESS,
  AUTH_FAILED,
  LOGGED_OUT,
  PROFILE_FEATCHED,
  AUTH_REGISTER,
  REGISTER_SUCCESS
  // REGISTER_FAILD
} from "../actions/types";

const INITIAL_STATE = {
  attempting: false,
  isAuth: false,
  profile: {},
  error: null,

  isRegister: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_ATTEMPTING:
      return { ...state, attempting: true, isAuth: false, error: null };
    case AUTH_SUCCESS:
      return { ...state, attempting: false, isAuth: true, error: null };
    case AUTH_FAILED:
      return {
        ...state,
        attempting: false,
        isAuth: false,
        error: action.payload
      };
    case LOGGED_OUT:
      return { ...state, isAuth: false, profile: {} };

    case PROFILE_FEATCHED:
      return { ...state, profile: action.payload };

      
    case AUTH_REGISTER:
      return { ...state, isRegister: true };
    case REGISTER_SUCCESS:
      return { ...state, isRegister: false, error: null };
    default:
      return state;
  }
};
