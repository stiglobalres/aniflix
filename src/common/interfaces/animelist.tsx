interface IAnimeListInfo {
    name: string,
    jname: string,
    format: string,
    duration: string,
    idanime: string,
    sub: string,
    dubani: string,
    totalep: string,
    img: string,
    pg: boolean
}

interface IAnimeList {
    nextpageavai?: boolean,
    mixAni?: IAnimeListInfo[],
    error?:string
}
export type { IAnimeList, IAnimeListInfo }