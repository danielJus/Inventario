import { combineReducers } from "redux";

import { userReducer, authReducer, productsReducer } from "./reducers";

export default combineReducers({
  user: userReducer,
  auth: authReducer,
  products: productsReducer
});
