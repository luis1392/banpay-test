import { ADD_CART, DELETE_CART } from "../types/shoppingCartTypes";

const initialState = {
  shoppingCart: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CART:
      if (state.shoppingCart !== null) {
        const item = state.shoppingCart.find(
          //find product by id
          (product) => product.id === action.payload.id
        );

        if (item) {
          item.quantity = item.quantity + 1;
          Object.assign(state.shoppingCart, item);
          return {
            ...action,
            shoppingCart: [...state.shoppingCart],
          };
        }
        if (state.shoppingCart.length) {
          return {
            ...action,
            shoppingCart: [...state.shoppingCart, action.payload],
          };
        }
      }
      return {
        ...action,
        shoppingCart: [action.payload],
      };
    case DELETE_CART:
      if (state.shoppingCart === null) {
        //return state if is null
        return state;
      }
      const item = state.shoppingCart.find(
        //find product by id
        (product) => product.id === action.payload.id
      );

      if (item) {
        if (item.quantity === 0) {
          return {
            ...action,
            shoppingCart: [...state.shoppingCart],
          };
        }
        item.quantity = item.quantity - 1;
        Object.assign(state.shoppingCart, item);
        return {
          ...action,
          shoppingCart: [...state.shoppingCart],
        };
      }
      return {
        ...action,
        shoppingCart: state.shoppingCart.filter(
          (item) => item !== action.payload
        ),
      };
    default:
      return state;
  }
}
