import axios from "axios";
import { Dispatch } from "redux";
import {
  GET_PEOPLE_REUEST,
  GET_PEOPLE_FAILURE,
  GET_PEOPLE_SUCCESS,
  PeopleDispatchTypes,
  PeopleType,
} from "./PeopleActionTypes";
import { fetchRestOfList, setTypeAndIdFromUrl } from "src/utils/actionsUtils";
import { parseToNumber } from "src/utils/commonUtils";

export const GetPeople = () => async (
  dispatch: Dispatch<PeopleDispatchTypes>
) => {
  dispatch({
    type: GET_PEOPLE_REUEST,
  });

  try {
    let peopleList: any[] = [];
    const fetchedpeople = await axios
      .get(`${process.env.REACT_APP_STAR_WARS_API}/people/`)
      .then(async (response) => {
        const { count, results } = response.data;
        const restpeople = await fetchRestOfList(
          count,
          results.length,
          "people/"
        );
        peopleList.push(...response.data.results, ...restpeople);
        peopleList = peopleList.map((item) => setTypeAndIdFromUrl(item));
        peopleList = peopleList.map((person) => {
          return {
            ...person,
            mass: parseToNumber(person.mass),
          };
        });
      });
    dispatch({
      type: GET_PEOPLE_SUCCESS,
      payload: peopleList,
    });
  } catch (error) {
    console.log("Can't get people" + error);
    dispatch({
      type: GET_PEOPLE_FAILURE,
    });
  }
};
