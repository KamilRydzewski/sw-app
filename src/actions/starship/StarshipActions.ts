import axios from "axios";
import { Dispatch } from "redux";
import {
  GET_STARSHIP_REUEST,
  GET_STARSHIP_FAILURE,
  GET_STARSHIP_SUCCESS,
  StarshipDispatchTypes,
  StarshipType,
} from "./StarshipActionTypes";

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
      .then((response) => {
        shipsList.push(response.data.results);
        return {
          total: response.data.count,
          onPage: response.data.results.length,
        };
      })
      .then((ships: { total: number; onPage: number }) => {
        const totalPages: number = Math.ceil(ships.total / ships.onPage);
        let promises = [];
        for (let i = 2; i <= totalPages; i++) {
          promises.push(
            axios.get(
              `${process.env.REACT_APP_STAR_WARS_API}/starships?page=${i}`
            )
          );
        }
        return Promise.all(promises);
      });

    dispatch({
      type: GET_STARSHIP_SUCCESS,
      payload: shipsList,
    });
    console.log(fetchedShips);
  } catch (error) {
    console.log("Can't get starships" + error);
    dispatch({
      type: GET_STARSHIP_FAILURE,
    });
  }
  //     dispatch({ type: GET_STARSHIP_SUCCESS, payload: response.data })
};
