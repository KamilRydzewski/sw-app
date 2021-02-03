import { CardType, ResponseType } from "src/types/mainTypes";

export const GET_STARSHIP_REUEST = "GET_STARSHIP_REQUEST";
export const GET_STARSHIP_FAILURE = "GET_STARSHIP_FAILURE";
export const GET_STARSHIP_SUCCESS = "GET_STARSHIP_SUCCESS";

export interface StarshipType extends CardType {
  crew?: number;
}

export interface StarshipResponseType extends ResponseType {
  results: StarshipType[];
}
export interface StarshipRequestI {
  type: typeof GET_STARSHIP_REUEST;
}
export interface StarshipFailureI {
  type: typeof GET_STARSHIP_FAILURE;
}
export interface StarshipSuccesI {
  type: typeof GET_STARSHIP_SUCCESS;
  payload: StarshipType[];
}

export type StarshipDispatchTypes =
  | StarshipRequestI
  | StarshipFailureI
  | StarshipSuccesI;
