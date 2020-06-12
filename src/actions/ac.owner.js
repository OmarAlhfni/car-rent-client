import {
  AUTH_SUCCESS,
  AUTH_FAILED,
  LOGGED_OUT,
  PROFILE_FEATCHED,
  AUTH_REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILD,
} from "./types";
// AUTH_ATTEMPTING, AUTH_SUCCESS, AUTH_FAILED
import {
  apiLogin,
  apiFetchOwner,
  apiRegister,
  apiAddComment,
} from "../api/owner";
import setAuthHeader from "../api/setAuthHeader";
const TOKEN_NAME = "customer_token";

// login
export const login = (login_data) => {
  return async (dispatch) => {
    try {
      const {
        data: { token },
      } = await apiLogin(login_data);
      // console.log("token: ", token);
      setAuthHeader(token);
      dispatch(fetchProfile());
      dispatch(success(token));
    } catch (e) {
      const {
        response: { data },
      } = e;
      dispatch(error(data.error));
    }
  };
};

// on Lodin
export const onLodinSignIn = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem(TOKEN_NAME);
      if (token == null || token === "undefined") {
        return dispatch(error({ error: "You need to login" }));
      }
      setAuthHeader(token);
      dispatch(fetchProfile());
      dispatch(success(token));
    } catch (e) {
      console.log(e);
    }
  };
};

// logOut
export const logOut = () => {
  localStorage.clear();
  setAuthHeader(null);
  return { type: LOGGED_OUT };
};

// fetch Profile
export const fetchProfile = () => {
  return async (dispatch) => {
    try {
      const {
        data: { owner },
      } = await apiFetchOwner();
      // localStorage.setItem("profile", owner.id);

      // console.log("data:", decoded);
      dispatch({ type: PROFILE_FEATCHED, payload: owner });
    } catch (e) {
      console.log(e);
    }
  };
};

// success
const success = (token) => {
  localStorage.setItem(TOKEN_NAME, token);
  return { type: AUTH_SUCCESS };
};

// error
const error = (data) => {
  return { type: AUTH_FAILED, payload: data };
};

// register
export const register = (info) => {
  return async (dispatch) => {
    try {
      await apiRegister(info);
      dispatch({ type: AUTH_REGISTER });
      dispatch({ type: REGISTER_SUCCESS });
    } catch (e) {
      const {
        response: { data },
      } = e;
      dispatch({ type: REGISTER_FAILD, payload: data.error });
      console.log(data);
    }
  };
};

// add comment
export const addComment = (data) => {
  return async (dispatch) => {
    try {
      await apiAddComment(data);
    } catch (error) {
      console.log(error);
    }
  };
};
