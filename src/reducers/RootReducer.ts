import { combineReducers } from "redux";
import starshipReducer from "./StarshipReducer";
import peopleReducer from "./PeopleReducer";

const RootReducer = combineReducers({
  starships: starshipReducer,
  people: peopleReducer,
});
export default RootReducer;
