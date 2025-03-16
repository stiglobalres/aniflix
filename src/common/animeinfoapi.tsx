import { fetchData } from "./api"
import { ANIME_INFO_API } from "./constant"

export const animeInfoApi = async(id:string) => {
    return fetchData(ANIME_INFO_API(id))
}


