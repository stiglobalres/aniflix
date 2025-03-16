import React, { ChangeEvent, useEffect, useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { EpisodeApi, WatchApi, getVideo } from "../common/watchapi";
import { getID } from "../common/constant";
import { EpisodeType, IEpisode, IServerType, IServerListType } from "../common/interfaces/episode";
import { List, SxProps } from "@mui/material";
import RenderAnimeTitle from "./_animetitle";
import RenderList from "./_animelist";

interface propType {
    id: string | any
}

const boxProps: SxProps = {
    width: '100%',
    bgcolor: 'background.paper',
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300
 };
 
 const serversDefault:IServerListType ={
    sub:[],
    dub:[]
 }

function Screen({id}: propType) {
    const [dubbedFlag, setDubbedFlag] = useState<boolean>(false)  //switch between subbed and dubbed
    const [episodeList, setEpisodeList] = useState<IEpisode[]>([]) //Episode List
    const [episode, setEpisode] = useState<IEpisode>()  // selected episode
    const [serverlist, setServerList] = useState<IServerListType>(serversDefault)
    const [loadingVid, setLoadingVid] = useState<boolean>(false)

    useEffect(()=>{
        getAnimeID(id);
    },[])

    const getAnimeID = async(id: string)=>{
       let animeID:number  = getID(id,'-');
       getEpisodeData(animeID);
    }
    const getServerData = async(id:number) => {
        let data:IServerListType =  await WatchApi(id);
        setServerList(data);
       // getServer();
    }

    const getEpisodeData =async(id: number) => {
        let data:EpisodeType = await EpisodeApi(id);
        setEpisodeList(data.episodetown);
    }

    const getAnimeLink=async(id:number)=>{
       // let data = await getVideo(id);
    }

    const dubswitch=(event: ChangeEvent<HTMLInputElement>)=>{
        setDubbedFlag(event.target.checked)
        setLoadingVid(true);
        //getServer();
    }

    const loadAnime =(ev: React.MouseEvent<HTMLButtonElement>, episode:IEpisode)=>{
        setEpisode(episode);
        let id:number = getID(episode.epId,'=');
        //getServerData(id);
    }

    const getServer=()=>{
        let servers: IServerType[] =[];
        let server: IServerType | undefined;
        servers = (dubbedFlag) ? serverlist.dub!: serverlist.sub!;
        if(servers.length) {
             server = servers.filter(x=> typeof x === undefined).shift();
             if(server !== undefined) {
                getAnimeLink(Number(server.srcId))
             }
        }
        setLoadingVid(false);
    }
    
    return(
        <Fragment>
            <section className=" mx-8 md:ml-8 md:flex">
                <div className="h-80 md:grid md:justify-center md:mb-8 md:grow ">
                    <video controls autoPlay className="bg-slate-900 w-full rounded-lg h-[20rem] sm:max-w-[35rem]">

                    </video>
                    <RenderAnimeTitle episode={episode} loadingVid={loadingVid} dubswitch={dubswitch}  />
                </div>
                <div className="min-h-8 w-full md:max-w-64 mt-12 md:mt-0 ">
                    <div className="min-h-8 w-full px-4  ">
                        <p className="text-sm font-semibold">Episodes</p>
                    </div>
                    <List  sx={boxProps}>
                        {episodeList.map((item:IEpisode) => (
                        <RenderList key={item.order} data={item} selectAnime={loadAnime}   />
                        ))}
                    </List>
                </div>
            </section>
        </Fragment>
    )
}

export default Screen