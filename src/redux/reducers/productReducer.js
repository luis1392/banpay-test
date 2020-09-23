import { NEW_PRODUCT, DELETE_PRODUCT } from "../types/productTypes";
const initialState = {
  products: null,
};

// Los reducers tienen que ser funciones __puras__!!
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NEW_PRODUCT:
      return { ...action, products: action.payload };
    case DELETE_PRODUCT:
      return {
        ...action,
        products: state.filter((data, i) => i !== action.payload),
      };
    default:
      return state;
  }
}
