import { reqApi } from "../configs/Configs";
import { getMovies } from "../../../server/types";

export async function getMovie(page: number, lang: string, sortby: string) {
  const { data } = await reqApi.get<getMovies>(
    `/discover/movie?sort_by=${sortby}}&language=${lang}&api_key=a0814a81d9e0ea8e164320078c18b3cb&page=${page}`
  );
  return data;
}
