interface IAnimeInfo {
    name: string,
    jname: string,
    pganime: string,
    quality: string,
    epsub: string,
    epdub: string,
    totalep: string,
    format: string,
    duration: string,
    desc: string,
    id: string,
    image: string,
}

interface IAniInfoMore {
    japanese:string,
    aired: string,
    premired: string,
    statusAnime: string,
    malscore: string,
    genre: [],
    studio: string,
    producer:[]
}

interface IRecommendation {
    name: string,
    jname: string,
    sub: string,
    dub: string,
    total: string,
    xid: string,
    image: string,
    format: string,
    duration: string
}

interface IAnimeRelated {
    infoX: [],
    mal_id: string,
    aniid: string,
    recommendation: IRecommendation[]
}

export type { IAnimeInfo, IRecommendation, IAnimeRelated, IAniInfoMore }