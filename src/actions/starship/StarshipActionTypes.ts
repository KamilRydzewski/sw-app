export const GET_STARSHIP_REUEST = "GET_STARSHIP_REQUEST";
export const GET_STARSHIP_FAILURE = "GET_STARSHIP_FAILURE";
export const GET_STARSHIP_SUCCESS = "GET_STARSHIP_SUCCESS";

export type StarshipType = {
  name: string;
  model: string;
  passengers: number;
  manufacturer: string;
  crew: number;
};

export type StarshipsType = {
  count: number;
  next: string;
  previous: string;
  results: StarshipType[];
};
export interface StarshipRequest {
  type: typeof GET_STARSHIP_REUEST;
}
export interface StarshipFailure {
  type: typeof GET_STARSHIP_FAILURE;
}
export interface StarshipSucces {
  type: typeof GET_STARSHIP_SUCCESS;
}

export type StarshipDispatchTypes =
  | StarshipRequest
  | StarshipFailure
  | StarshipSucces;
