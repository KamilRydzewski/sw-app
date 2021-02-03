import axios from "axios";
import { CardType } from "src/types/mainTypes";

export async function fetchRestOfList<T extends CardType>(
  total: number,
  onPage: number,
  endpoint: string
): Promise<T[]> {
  const totalPages: number = Math.ceil(total / onPage);
  const promises = [];
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

export function setIdFromUrl<T extends CardType>(data: T): T {
  const urlDecrypted = data.url.split("/");
  return { ...data, id: parseInt(urlDecrypted[urlDecrypted.length - 2]) };
}
export function setTypeFromUrl<T extends CardType>(data: T): T {
  const urlDecrypted = data.url.split("/");
  return { ...data, cardType: urlDecrypted[urlDecrypted.length - 3] };
}

export function setTypeAndIdFromUrl<T extends CardType>(data: T): T {
  const urlDecrypted = data.url.split("/");
  return {
    ...data,
    cardType: urlDecrypted[urlDecrypted.length - 3],
    id: parseInt(urlDecrypted[urlDecrypted.length - 2]),
  };
}
