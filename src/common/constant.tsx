export const DOC_TITLE ='AniFlix Free Anime Streaming - '

export type AnimeFormatType = 'movie' | 'ova' | 'ona' | 'subbed-anime' | 'dubbed-anime' | 'special' | 'tv' | 'popular';

type separatorType = "-" | "=" | "?"

const getID = (id: string, separator: separatorType) => { return  Number(id.split(separator).pop()) } 

const API_URL = 'https://aniwatch-api-v1-0.onrender.com/api/'

const HOME_URI = 'parse' 
const SERVER_URI = 'server'
const SERVER_LINK_URI ='src-server'
const EPISODE_URI = 'episode'
const ANIME_INFO_URI = 'related'
const ANIME_MIX_URI = 'mix'

const HOME_API =()=>  { return API_URL + HOME_URI; }
const SERVER_API =(id: number)=>  { return API_URL + SERVER_URI +'/ep='+ id; }
const SERVER_LINK_API =(id: number)=>  { return API_URL + SERVER_LINK_URI +'/'+ id; }
const EPISODE_API =(id: number)=>  { return API_URL + EPISODE_URI +'/'+ id; }
const ANIME_INFO_API = (id: string) => { return API_URL + ANIME_INFO_URI + '/' + id}
const ANIME_MIX_API = (name: string, page:number) => { return `${API_URL}${ANIME_MIX_URI}/${name}/${page}`}


export {
    getID, 
    HOME_API , 
    SERVER_API, 
    EPISODE_API, 
    SERVER_LINK_API, 
    ANIME_INFO_API,
    ANIME_MIX_API
}