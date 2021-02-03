import { CardType, ResponseType } from "src/types/mainTypes";

export const GET_PEOPLE_REUEST = "GET_PEOPLE_REQUEST";
export const GET_PEOPLE_FAILURE = "GET_PEOPLE_FAILURE";
export const GET_PEOPLE_SUCCESS = "GET_PEOPLE_SUCCESS";

export interface PeopleType extends CardType {
  mass?: number;
}

export interface PeopleResponseType extends ResponseType {
  results: PeopleType[];
}
export interface PeopleRequestI {
  type: typeof GET_PEOPLE_REUEST;
}
export interface PeopleFailureI {
  type: typeof GET_PEOPLE_FAILURE;
}
export interface PeopleSuccesI {
  type: typeof GET_PEOPLE_SUCCESS;
  payload: PeopleType[];
}

export type PeopleDispatchTypes =
  | PeopleRequestI
  | PeopleFailureI
  | PeopleSuccesI;
