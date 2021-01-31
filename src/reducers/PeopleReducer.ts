import {
  GET_PEOPLE_REUEST,
  GET_PEOPLE_FAILURE,
  GET_PEOPLE_SUCCESS,
  PeopleDispatchTypes,
  PeopleType,
} from "src/actions/people/PeopleActionTypes";

interface DefaultStateI {
  loading: boolean;
  peoples?: PeopleType[];
}

const defaultState: DefaultStateI = {
  loading: false,
};
const peopleReducer = (
  state: DefaultStateI = defaultState,
  action: PeopleDispatchTypes
): DefaultStateI => {
  console.log(action);
  switch (action.type) {
    case GET_PEOPLE_REUEST:
      return {
        loading: false,
      };
    case GET_PEOPLE_FAILURE:
      return {
        loading: true,
      };
    case GET_PEOPLE_SUCCESS:
      return {
        loading: false,
        peoples: action.payload,
      };
    default:
      return state;
  }
};

export default peopleReducer;
