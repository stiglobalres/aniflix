import { fetchData } from "./api";
import { ANIME_MIX_API } from "./constant";

const getAnimeList = async(name:string, page:number)=> {
    let data = await fetchData(ANIME_MIX_API(name, page));
    return data;
}

export { getAnimeList}