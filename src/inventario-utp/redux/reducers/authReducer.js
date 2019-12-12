import { AuthTypes } from "../actions/authTypes";
const INITIAL_STATE = {
  loading: false,
  user: null,
  errorMessage: "",
  forgot_password: "",
  password_change: ""
};

export default (state = INITIAL_STATE, action) => {
  console.log("ACTION", action);
  switch (action.type) {
    case AuthTypes.LOGIN_START:
      return {
        ...state,
        loading: true
      };
    case AuthTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        errorMessage: ""
      };
    case AuthTypes.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload
      };
    case AuthTypes.REGISTER_START:
      return {
        ...state,
        loading: true
      };
    case AuthTypes.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        errorMessage: ""
      };
    case AuthTypes.REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload
      };
    case AuthTypes.FORGOT_PASSWORD_START:
      return {
        ...state,
        loading: true
      };
    case AuthTypes.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        password_change: true,
        errorMessage: ""
      };
    case AuthTypes.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        password_change: false,
        errorMessage: ""
      };

    case AuthTypes.CHANGE_PASSWORD_START:
      return {
        ...state,
        loading: true
      };
    case AuthTypes.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        forgot_password: true,
        errorMessage: ""
      };
    case AuthTypes.CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        forgot_password: false,
        errorMessage: ""
      };
    case AuthTypes.LOGOUT:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
};
