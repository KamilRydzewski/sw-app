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

export const GetPeoples = () => async (
  dispatch: Dispatch<PeopleDispatchTypes>
) => {
  dispatch({
    type: GET_PEOPLE_REUEST,
  });

  try {
    let peoplesList: any[] = [];
    const fetchedPeoples = await axios
      .get(`${process.env.REACT_APP_STAR_WARS_API}/people`)
      .then(async (response) => {
        const { count, results } = response.data;
        const restPeoples = await fetchRestOfList(
          count,
          results.length,
          "people"
        );
        peoplesList.push(...response.data.results, ...restPeoples);
        peoplesList = peoplesList.map((item) => setTypeAndIdFromUrl(item));
      });
    dispatch({
      type: GET_PEOPLE_SUCCESS,
      payload: peoplesList,
    });
  } catch (error) {
    console.log("Can't get peoples" + error);
    dispatch({
      type: GET_PEOPLE_FAILURE,
    });
  }
};
