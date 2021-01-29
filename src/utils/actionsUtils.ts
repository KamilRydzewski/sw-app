import axios from "axios";

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

interface IUrl {
  url: string;
}

type GetAndSetIdFromUrlData = IUrl[] | IUrl;

export function getAndSetIdFromUrl(data: GetAndSetIdFromUrlData) {
  if (Array.isArray(data)) {
    return data.map((item) => {
      return { ...item, id: parseInt(item.url.slice(-2, -1)) };
    });
  } else if (typeof data === "object") {
    return { ...data, id: parseInt(data.url.slice(-2, -1)) };
  } else return data;
}
