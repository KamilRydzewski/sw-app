import axios from "axios";
import { Dispatch } from "redux";
import {
  GET_STARSHIP_REUEST,
  GET_STARSHIP_FAILURE,
  GET_STARSHIP_SUCCESS,
  StarshipDispatchTypes,
  StarshipType,
  StarshipResponseType,
} from "./StarshipActionTypes";
import { fetchRestOfList, setTypeAndIdFromUrl } from "src/utils/actionsUtils";
import { parseToNumber } from "src/utils/commonUtils";

const STARSHIP_ENDPOINT = `${process.env.REACT_APP_STAR_WARS_API}/starships/`;
export const GetStarships = () => async (
  dispatch: Dispatch<StarshipDispatchTypes>
): Promise<void> => {
  dispatch({
    type: GET_STARSHIP_REUEST,
  });

  let shipsList: StarshipType[] = [];
  await axios
    .get<StarshipResponseType>(STARSHIP_ENDPOINT)
    .then(async (response) => {
      const { count, results } = response.data;
      const restShips: StarshipType[] = await fetchRestOfList(
        count,
        results.length,
        "starships/"
      );
      shipsList.push(...response.data.results, ...restShips);
      shipsList = shipsList
        .map((item) => setTypeAndIdFromUrl(item))
        .map((ship) => {
          return {
            ...ship,
            crew: parseToNumber(ship.crew),
          };
        });
      dispatch({
        type: GET_STARSHIP_SUCCESS,
        payload: shipsList,
      });
    })
    .catch((error) => {
      console.error("Can't get starships" + error);
      dispatch({
        type: GET_STARSHIP_FAILURE,
      });
    });
};
