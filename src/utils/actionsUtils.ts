import axios from "axios";
import { StarshipType } from "src/actions/starship/StarshipActionTypes";
import { PeopleType } from "src/actions/people/PeopleActionTypes";

export async function fetchRestOfList(
  total: number,
  onPage: number,
  endpoint: string
) {
  const totalPages: number = Math.ceil(total / onPage);
  let promises = [];
  for (let nextPage = 2; nextPage <= totalPages; nextPage++) {
    promises.push(
      axios.get(
        `${process.env.REACT_APP_STAR_WARS_API}/${endpoint}?page=${nextPage}`
      )
    );
  }
  return await (await Promise.all(promises))
    .map((item) => item.data.results)
    .flat();
}
export function setIdFromUrl(data: StarshipType) {
  let urlDecrypted = data.url.split("/");
  return { ...data, id: parseInt(urlDecrypted[urlDecrypted.length - 2]) };
}
export function setTypeFromUrl(data: StarshipType) {
  let urlDecrypted = data.url.split("/");
  return { ...data, cardType: urlDecrypted[urlDecrypted.length - 3] };
}

export function setTypeAndIdFromUrl(data: PeopleType) {
  let urlDecrypted = data.url.split("/");
  return {
    ...data,
    cardType: urlDecrypted[urlDecrypted.length - 3],
    id: parseInt(urlDecrypted[urlDecrypted.length - 2]),
  };
}
