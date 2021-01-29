import {
  GET_STARSHIP_REUEST,
  GET_STARSHIP_FAILURE,
  GET_STARSHIP_SUCCESS,
  StarshipDispatchTypes,
  StarshipType,
} from "src/actions/starship/StarshipActionTypes";

interface DefaultStateI {
  loading: boolean;
  starships?: StarshipType[];
}

const defaultState: DefaultStateI = {
  loading: false,
};
const starshipReducer = (
  state: DefaultStateI = defaultState,
  action: StarshipDispatchTypes
): DefaultStateI => {
  console.log(action);
  switch (action.type) {
    case GET_STARSHIP_REUEST:
      return {
        loading: false,
      };
    case GET_STARSHIP_FAILURE:
      return {
        loading: true,
      };
    case GET_STARSHIP_SUCCESS:
      return {
        loading: false,
        starships: action.payload,
      };
    default:
      return state;
  }
};

export default starshipReducer;
