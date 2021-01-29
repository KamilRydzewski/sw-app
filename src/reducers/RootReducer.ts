import { combineReducers } from "redux";
import starshipReducer from "./StarshipReducer";

const RootReducer = combineReducers({
  starships: starshipReducer,
});
export default RootReducer;
