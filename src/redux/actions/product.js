import { NEW_PRODUCT, DELETE_PRODUCT } from "../types/productTypes";

// Action creators
export function newProduct(product) {
  return async (dispatch) => {
    dispatch({
      type: NEW_PRODUCT,
      payload: product,
    });
  };
}

export function deleteProduct(id) {
  return async (dispatch) => {
    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });
  };
}
