import { ProductTypes } from "../actions/productTypes";

const INITIAL_STATE = {
  loading: null,
  products: null,
  product: null,
  errorMessage: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductTypes.FETCH_PRODUCTS_START:
      return { ...this.state, loading: true };
    case ProductTypes.FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case ProductTypes.FETCH_PRODUCTS_FAILURE:
      return { ...state, loading: false, errorMessage: action.payload };
    case ProductTypes.EDIT_PRODUCT_START:
      return { ...state, loading: true };
    case ProductTypes.EDIT_PRODUCT_SUCCESS:
      return { ...state, loading: false, product: action.payload };
    case ProductTypes.EDIT_PRODUCT_FAILURE:
      return { ...state, loading: false, errorMessage: action.payload };
    case ProductTypes.DELETE_PRODUCT_START:
      return { ...state, loading: true };
    case ProductTypes.DELETE_PRODUCT_SUCCESS:
      return { ...state, product: action.payload };
    default:
      return state;
  }
};
