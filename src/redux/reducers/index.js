import { combineReducers } from "redux";

import productReducer from "./productReducer";
import shoppingCartReducer from "./shoppingCartReducer";

export default combineReducers({
  productReducer,
  shoppingCartReducer,
});
