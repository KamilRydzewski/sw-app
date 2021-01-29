export const GET_STARSHIP_REUEST = "GET_STARSHIP_REQUEST";
export const GET_STARSHIP_FAILURE = "GET_STARSHIP_FAILURE";
export const GET_STARSHIP_SUCCESS = "GET_STARSHIP_SUCCESS";

export type StarshipType = {
  id?: number;
  name: string;
  model: string;
  passengers: number;
  manufacturer: string;
  crew: number;
  url: string;
};

export type StarshipsType = {
  count: number;
  next: string;
  previous: string;
  results: StarshipType[];
};
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
