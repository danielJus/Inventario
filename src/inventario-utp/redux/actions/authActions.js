import { AuthTypes } from "./authTypes";
import axios from "axios";

/////////////////////////LOGIN//////////////
export const login_start = () => ({
  type: AuthTypes.LOGIN_START
});

export const login_success = user => ({
  type: AuthTypes.LOGIN_SUCCESS,
  payload: user
});

export const login_failure = errorMessage => ({
  type: AuthTypes.LOGIN_FAILURE,
  payload: errorMessage
});

export const login = user => {
  return dispatch => {
    dispatch(login_start());
    axios
      .post("http://localhost:8000/api/v1/users/login", user)
      .then(user => {
        dispatch(login_success(user));
      })
      .catch(error => dispatch(error));
  };
};

/////////////////////////REGISTER//////////////

export const register_start = () => ({
  type: AuthTypes.register_START
});

export const register_success = user => ({
  type: AuthTypes.register_SUCCESS,
  payload: user
});

export const register_failure = errorMessage => ({
  type: AuthTypes.register_FAILURE,
  payload: errorMessage
});

export const register = user => {
  return dispatch => {
    dispatch(register_start());
    axios
      .post("http://localhost:8000/api/v1/users/signup", user)
      .then(user => {
        dispatch(register_success(user));
      })
      .catch(error => dispatch(error));
  };
};
