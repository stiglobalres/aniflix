import { ChangeEvent } from "react"

interface IEpisode {
    epId: string,
    name: string,
    order: number
}

type EpisodeType = {
    episodetown: Array<IEpisode>
}

interface IAnimeTitleProps {
    loadingVid: boolean,
    episode: IEpisode | undefined,
    dubswitch:  (ev:ChangeEvent<HTMLInputElement>)=>void
 }

 interface IServerType {
    server:string,
    id:string,
    srcId: string
}

interface IServerListType {
    sub: IServerType[],
    dub: IServerType[]
 }

 interface IEpisodeProps {
    data: IEpisode,
    selectAnime:(ev: React.MouseEvent<HTMLButtonElement>, episode:IEpisode)=> void
 }


export type {EpisodeType, IEpisode, IAnimeTitleProps, IServerType, IServerListType, IEpisodeProps }