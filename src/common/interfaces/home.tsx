import  { AnimeFormatType } from './../constant';

export interface ISlides {
    name: string,
    jname: string,
    spotlight: string,
    imageAnime: string,
    format: AnimeFormatType,
    duration: string,
    release: string,
    quality: string,
    animeId: string,
    anidesc: string
}

export interface ITrend {
    name: string,
    ranking: number,
    imgAni: string,
    jname: string,
    iD: string
}

export interface IUpcomingAnime {
    name: string,
    format: number,
    release: string,
    idani: string,
    imgAnime: string
}

export interface ITrendData {
    [x: string]: any;
    data: ITrend[];
}

export interface ISlidesData {
    data: Array<ISlides>
}

export interface IUpcomingAnimeData {
    data: Array<IUpcomingAnime>
}

export interface IHomeData {
    trend: ITrend,
    slides: ISlidesData,
    UpcomingAnime: IUpcomingAnimeData
}
