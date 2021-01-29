import axios from "axios";
import { Dispatch } from "redux";
import {
  GET_STARSHIP_REUEST,
  GET_STARSHIP_FAILURE,
  GET_STARSHIP_SUCCESS,
  StarshipDispatchTypes,
  StarshipType,
} from "./StarshipActionTypes";
import { fetchRestOfList, getAndSetIdFromUrl } from "src/utils/actionsUtils";

export const GetStarships = () => async (
  dispatch: Dispatch<StarshipDispatchTypes>
) => {
  dispatch({
    type: GET_STARSHIP_REUEST,
  });

  try {
    let shipsList: StarshipType[] = [];
    const fetchedShips = await axios
      .get(`${process.env.REACT_APP_STAR_WARS_API}/starships`)
      .then(async (response) => {
        const { count, results } = response.data;
        const restShips = await fetchRestOfList(
          count,
          results.length,
          "starships"
        );
        shipsList.push(...response.data.results, ...restShips);
        shipsList.map((item) => getAndSetIdFromUrl(item));
      });

    dispatch({
      type: GET_STARSHIP_SUCCESS,
      payload: shipsList,
    });
  } catch (error) {
    console.log("Can't get starships" + error);
    dispatch({
      type: GET_STARSHIP_FAILURE,
    });
  }
};
