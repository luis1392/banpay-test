import {
  NEW_PRODUCT,
  DELETE_PRODUCT,
  ADD_TO_INVENTORY,
  REMOVE_TO_INVENTORY,
} from "../types/productTypes";

// Action creators
export function newProduct(product) {
  return async (dispatch) => {
    dispatch({
      type: NEW_PRODUCT,
      payload: product,
    });
  };
}

export function addToInventory(product) {
  return async (dispatch) => {
    dispatch({
      type: ADD_TO_INVENTORY,
      payload: product,
    });
  };
}

export function removeToInventory(product) {
  return async (dispatch) => {
    dispatch({
      type: REMOVE_TO_INVENTORY,
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
