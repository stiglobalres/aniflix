import { fetchData } from "./api"
import { EPISODE_API, SERVER_API, SERVER_LINK_API } from "./constant"

function WatchApi(id: number){
    try {
        const data = fetchData(SERVER_API(id))
        return data;
    }
    catch(e) {
        console.log('Error',e)
    }
}

function EpisodeApi(id: number) {
    try {
        const data = fetchData(EPISODE_API(id))
        return data;
    }
    catch(e) {
        console.log('Error',e)
    }
}

function getVideo(id:number) {
    try{
        const data = fetchData(SERVER_LINK_API(id))
        return data;
    }
    catch(e) {
        console.log('Error',e)
    }
}

export { WatchApi , EpisodeApi, getVideo}