import { ProductTypes } from "./productTypes";
import axios from "axios";
import { history } from "../../utils/history";

const create_product_start = () => ({
  type: ProductTypes.CREATE_PRODUCT_START
});

const create_product_success = product => ({
  type: ProductTypes.CREATE_PRODUCT_SUCCESS,
  payload: product
});

const create_product_failure = errorMessage => ({
  type: ProductTypes.CREATE_PRODUCT_FAILURE,
  payload: errorMessage
});

export const create_product = product => {
  return dispatch => {
    dispatch(create_product_start());
    axios
      .post("http://localhost:8000/api/v1/products", product)
      .then(product => {
        dispatch(create_product_success(product));
        history.push("/");
      })
      .catch(error => dispatch(create_product_failure(error)));
  };
};

const fetch_products_start = () => ({
  type: ProductTypes.FETCH_PRODUCTS_START
});

const fetch_products_success = products => ({
  type: ProductTypes.FETCH_PRODUCTS_SUCCESS,
  payload: products
});

const fetch_products_failure = errorMessage => ({
  type: ProductTypes.FETCH_PRODUCTS_FAILURE,
  payload: errorMessage
});

export const fetch_products = () => {
  return dispatch => {
    dispatch(fetch_products_start());
    axios
      .get("http://localhost:8000/api/v1/products")
      .then(products =>
        dispatch(fetch_products_success(products.data.data.products))
      )
      .catch(error => dispatch(fetch_products_failure(error)));
  };
};

const edit_product_start = () => ({
  type: ProductTypes.EDIT_PRODUCT_START
});

const edit_product_success = product => ({
  type: ProductTypes.EDIT_PRODUCT_SUCCESS,
  payload: product
});

const edit_product_failure = errorMessage => ({
  type: ProductTypes.EDIT_PRODUCT_FAILURE,
  payload: errorMessage
});

export const edit_product = (id, product) => {
  return dispatch => {
    dispatch(edit_product_start());
    axios
      .patch(`http://localhost:8000/api/v1/products/${id}`, product)
      .then(product => {
        dispatch(edit_product_success(product));
        window.location.reload();
      })
      .catch(error => dispatch(edit_product_failure(error)));
  };
};

const delete_product_start = () => ({
  type: ProductTypes.DELETE_PRODUCT_START
});

const delete_product_success = product => ({
  type: ProductTypes.DELETE_PRODUCT_SUCCESS,
  payload: product
});

const delete_product_failure = errorMessage => ({
  type: ProductTypes.DELETE_PRODUCT_FAILURE,
  payload: errorMessage
});

const request_product_start = () => ({
  type: ProductTypes.REQUEST_PRODUCT_START
});

const request_product_success = message => ({
  type: ProductTypes.REQUEST_PRODUCT_SUCCESS,
  payload: message
});

const request_product_failure = errorMessage => ({
  type: ProductTypes.REQUEST_PRODUCT_FAILURE,
  payload: errorMessage
});

export const delete_product = id => {
  return dispatch => {
    dispatch(delete_product_start());
    axios
      .delete(`http://localhost:8000/api/v1/products/${id}`)
      .then(product => {
        dispatch(delete_product_success(product));
        window.location.reload();
      })
      .catch(error => dispatch(delete_product_failure(error)));
  };
};

export const request_product = (id, values) => {
  return dispatch => {
    dispatch(request_product_start());
    axios
      .post(`http://localhost:8000/api/v1/products/${id}`, values)
      .then(res => {
        dispatch(request_product_success(res.data.message));
        window.location.reload();
      })
      .catch(error => dispatch(request_product_failure(error)));
  };
};
