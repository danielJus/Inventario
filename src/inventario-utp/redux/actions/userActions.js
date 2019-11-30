import { UserTypes } from "./userTypes";
import axios from "axios";

const fetch_users_start = () => ({
  type: UserTypes.FETCH_USERS_START
});

const fetch_users_success = users => ({
  type: UserTypes.FETCH_USERS_SUCCESS,
  payload: users
});

const fetch_users_failure = errorMessage => ({
  type: UserTypes.FETCH_USERS_FAILURE,
  payload: errorMessage
});

export const fetch_users = () => {
  return dispatch => {
    dispatch(fetch_users_start());
    axios
      .get("http://localhost:8000/api/v1/users")
      .then(users => dispatch(fetch_users_success(users)))
      .catch(error => dispatch(fetch_users_failure(error)));
  };
};

const edit_user_start = () => ({
  type: UserTypes.EDIT_USER_START
});

const edit_user_success = user => ({
  type: UserTypes.EDIT_USER_SUCCESS,
  payload: user
});

const edit_user_failure = errorMessage => ({
  type: UserTypes.EDIT_USER_FAILURE,
  payload: errorMessage
});

export const edit_user = user => {
  return dispatch => {
    dispatch(edit_user_start());
    axios
      .patch(`http://localhost:8000/api/v1/users/${user.id}`, user.fields)
      .then(user => {
        dispatch(edit_user_success(user));
      })
      .catch(error => dispatch(edit_user_failure(error)));
  };
};

const delete_user_start = () => ({
  type: UserTypes.DELETE_USER_START
});

const delete_user_success = user => ({
  type: UserTypes.DELETE_USER_SUCCESS,
  payload: user
});

const delete_user_failure = errorMessage => ({
  type: UserTypes.DELETE_USER_FAILURE,
  payload: errorMessage
});

export const delete_user = user => {
  return dispatch => {
    dispatch(delete_user_start());
    axios
      .patch(`http://localhost:8000/api/v1/users/${user.id}`, user.fields)
      .then(user => {
        dispatch(delete_user_success(user));
      })
      .catch(error => dispatch(delete_user_failure(error)));
  };
};
