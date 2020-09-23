import { ADD_CART, DELETE_CART } from "../types/shoppingCartTypes";

// Action creators
export function addToCart(product) {
  return async (dispatch) => {
    dispatch({
      type: ADD_CART,
      payload: product,
    });
  };
}

export function deleteToCart(id) {
  return async (dispatch) => {
    dispatch({
      type: DELETE_CART,
      payload: id,
    });
  };
}
