import { combineReducers } from "redux";
import ProductCartReducer from "../redux/ProductCartReducer";

const rootReducer = combineReducers({
  stateCart: ProductCartReducer, // cart state
});

export default rootReducer;
