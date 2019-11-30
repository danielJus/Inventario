import { UserTypes } from "../actions/userTypes";

const INITIAL_STATE = {
  loading: null,
  users: null,
  user: null,
  errorMessage: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.FETCH_USERS_START:
      return { ...this.state, loading: true };
    case UserTypes.FETCH_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload };
    case UserTypes.FETCH_USERS_FAILURE:
      return { ...state, loading: false, errorMessage: action.payload };
    case UserTypes.EDIT_USER_START:
      return { ...state, loading: true };
    case UserTypes.EDIT_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case UserTypes.EDIT_USER_FAILURE:
      return { ...state, loading: false, errorMessage: action.payload };
    case UserTypes.DELETE_USER_START:
      return { ...state, loading: true };
    case UserTypes.DELETE_USER_SUCCESS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
