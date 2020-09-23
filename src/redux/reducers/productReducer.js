import { NEW_PRODUCT, DELETE_PRODUCT } from "../types/productTypes";
const initialState = {
  products: [
    {
      id: "_" + Math.random().toString(36).substr(2, 9),
      name: "Chocolate",
      price: 10.0,
      inventory: 5,
    },
    {
      id: "_" + Math.random().toString(36).substr(2, 9),
      name: "Queso",
      price: 45.0,
      inventory: 15,
    },
  ],
};

// Los reducers tienen que ser funciones __puras__!!
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NEW_PRODUCT:
      return { ...action, products: [...state.products, action.payload] };
    case DELETE_PRODUCT:
      return {
        ...action,
        products: state.filter((data, i) => i !== action.payload),
      };
    default:
      return state;
  }
}
