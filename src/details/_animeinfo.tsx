import { ClosedCaption, Mic, Circle } from "@mui/icons-material"
import { Fragment } from "react/jsx-runtime"
import { IAniInfoMore, IAnimeInfo } from "../common/interfaces/animeinfo"

interface animeInfoProps {
    animeInfo?: IAnimeInfo,
    animeInfoMore?:IAniInfoMore,
    showMoreDescFlag: boolean,
    setShowMoreDescFlag: React.Dispatch<React.SetStateAction<boolean>>
}


export default function RenderAnimeInfo({animeInfo, animeInfoMore, showMoreDescFlag, setShowMoreDescFlag}: animeInfoProps) {
    return(
        <Fragment>
             <section className="px-8 pb-4 bg-gradient-to-t from-[#4d4d4d] via-[#404040] to-[#676767] shadow-md">
                <div className="w-full min-h-[12rem] sm:flex">
                    <section className="w-full md:w-80 p-4 grid sm:block justify-center">
                        <img  className="rounded-md" src={animeInfo?.image} alt={animeInfo?.name} />
                        <div className="w-full flex mt-2">
                            <span className="text-xs p-1 h-6 grid items-center border border-gray-600 rounded-s-md overflow-hidden bg-white ">{animeInfo?.pganime}</span>
                            <span className="text-xs p-1 h-6 ml-1 flex items-center bg-yellow-300 border border-gray-600  overflow-hidden">{animeInfo?.quality}</span>
                            <span className="text-xs pl-1 pr-2 h-6 ml-1 flex items-center bg-green-300 border border-gray-600  overflow-hidden"><ClosedCaption className="!text-sm" /> {animeInfo?.epsub}</span>
                            {(animeInfo?.epdub) ?
                                <span className="text-xs pl-1 pr-2  h-6 ml-1 flex items-center bg-red-300 border border-gray-600  overflow-hidden"><Mic className="!text-sm" /> {animeInfo?.epdub}</span>
                            :<></>}
                            <span className="text-xs pl-1 h-6 flex items-center"><Circle className="!text-[0.25rem] text-gray-500" /> </span>
                            <span className="text-xs pl-1 h-6 flex items-center text-white">{animeInfo?.format}</span>
                            <span className="text-xs pl-1 h-6 flex items-center"><Circle className="!text-[0.25rem] text-gray-500" /> </span>
                            <span className="text-xs pl-1 h-6 flex items-center text-white">{animeInfo?.duration}</span>
                        </div>
                    </section>
                    <section className="w-full p-4">
                        <p className="text-sm font-bold text-white">{animeInfo?.name}</p>
                        <p className="text-sm mb-4 text-white">{animeInfo?.jname}</p>
                        
                        <p className="text-sm text-pretty text-white"><span className={(showMoreDescFlag) ? '':"line-clamp-4  text-ellipsis"} >{animeInfo?.desc}</span> <button className="underline" onClick={()=>setShowMoreDescFlag(!showMoreDescFlag)}>[show {(showMoreDescFlag)?'less':'more' }]</button></p>
                    </section>
                </div>
            </section>
            <section className="w-full min-h-28 bg-[#3e3e3e] px-8 py-4 shadow-lg">
                <p className="text-sm font-bold text-white mb-1">Japanese: <span className="font-normal" >{animeInfoMore?.japanese}</span></p>
                <p className="text-sm font-bold text-white mb-1">Aired: <span className="font-normal" >{animeInfoMore?.aired}</span></p>
                <p className="text-sm font-bold text-white mb-1">Premiered: <span className="font-normal" >{animeInfoMore?.premired}</span></p>
                <p className="text-sm font-bold text-white mb-1">Status: <span className="font-normal" >{animeInfoMore?.statusAnime}</span></p>
                <p className="text-sm font-bold text-white mb-1">Mal Score: <span className="font-normal" >{animeInfoMore?.malscore}</span></p>
                {(animeInfoMore?.genre.length) ? <p className="text-sm font-bold text-white mb-1">Genres: <span className="font-normal" >{animeInfoMore?.genre.join(", ")}</span></p>:<></>}
                <p className="text-sm font-bold text-white mb-1">Studios: <span className="font-normal" >{animeInfoMore?.studio}</span></p>
                {(animeInfoMore?.producer.length) ? <p className="text-sm font-bold text-white mb-1">Producers: <span className="font-normal" >{animeInfoMore?.producer.join(", ")}</span></p>:<></>}
            </section>
        </Fragment>
    )
}

