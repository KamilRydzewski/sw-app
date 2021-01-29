import axios from "axios";
import { StarshipType } from "src/actions/starship/StarshipActionTypes";

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

type GetAndSetIdFromUrlData = StarshipType;

export function getAndSetIdFromUrl(data: GetAndSetIdFromUrlData) {
  return { ...data, id: parseInt(data.url.slice(-2, -1)) };
}
