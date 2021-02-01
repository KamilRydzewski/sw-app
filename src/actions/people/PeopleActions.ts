import axios from "axios";
import { Dispatch } from "redux";
import {
  GET_PEOPLE_REUEST,
  GET_PEOPLE_FAILURE,
  GET_PEOPLE_SUCCESS,
  PeopleDispatchTypes,
  PeopleType,
  PeopleResponseType,
} from "./PeopleActionTypes";
import { fetchRestOfList, setTypeAndIdFromUrl } from "src/utils/actionsUtils";
import { parseToNumber } from "src/utils/commonUtils";

const PEOPLE_ENDPOINT = `${process.env.REACT_APP_STAR_WARS_API}/people/`;
export const GetPeople = () => async (
  dispatch: Dispatch<PeopleDispatchTypes>
) => {
  dispatch({
    type: GET_PEOPLE_REUEST,
  });
  let peopleList: PeopleType[] = [];
  await axios
    .get<PeopleResponseType>(PEOPLE_ENDPOINT)
    .then(async (response) => {
      const { count, results } = response.data;
      const restpeople = await fetchRestOfList(
        count,
        results.length,
        "people/"
      );
      peopleList.push(...response.data.results, ...restpeople);
      peopleList = peopleList
        .map((peopleType) => setTypeAndIdFromUrl(peopleType))
        .map((person) => {
          return {
            ...person,
            mass: parseToNumber(person.mass),
          };
        });
        console.log(peopleList);
      dispatch({
        type: GET_PEOPLE_SUCCESS,
        payload: peopleList,
      });
    })
    .catch((reason) => {
      console.error("Can't get people" + reason);
      dispatch({
        type: GET_PEOPLE_FAILURE,
      });
    });
};
