import { combineReducers } from "redux";
import starshipReducer from "./StarshipReducer";

const RootReducer = combineReducers({
  starship: starshipReducer,
});
export default RootReducer;
