import { ADD_CART, DELETE_CART } from "../types/shoppingCartTypes";

const initialState = {
  shoppingCart: null,
};

// Los reducers tienen que ser funciones __puras__!!
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CART:
      return { ...action, shoppingCart: [...state.products, action.payload] };
    case DELETE_CART:
      return {
        ...action,
        shoppingCart: state.filter((data, i) => i !== action.payload),
      };
    default:
      return state;
  }
}
