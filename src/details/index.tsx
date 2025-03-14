import { Fragment } from "react/jsx-runtime";
import Header from "../components/header";
import Footer from "../components/footer";
import { Divider } from "@mui/material";
import { useEffect, useState } from "react";
import { IAniInfoMore, IAnimeInfo, IAnimeRelated } from "../common/interfaces/animeinfo";
import { Circle, ClosedCaption, ClosedCaptionOutlined, Mic } from "@mui/icons-material";
import { animeInfoApi } from "../common/animeinfoapi";
import { useParams } from "react-router-dom";

const animeInfoDefault:IAnimeInfo={
    name: "Hunter x Hunter",
    jname: "Hunter x Hunter",
    pganime: "PG-13",
    quality: "HD",
    epsub: "62",
    epdub: "67",
    totalep: "62",
    format: "TV",
    duration: "23m",
    desc: "Hunters are specialized in a wide variety of fields, ranging from treasure hunting to cooking. They have access to otherwise unavailable funds and information that allow them to pursue their dreams and interests. However, being a hunter is a special privilege, only attained by taking a deadly exam with an extremely low success rate.\n\nGon Freecss, a 12-year-old boy with the hope of finding his missing father, sets out on a quest to take the Hunter Exam. Along the way, he picks up three companions who also aim to take the dangerous test: the revenge-seeking Kurapika, aspiring doctor Leorio Paladiknight, and a mischievous child the same age as Gon, Killua Zoldyck.\n\nHunter x Hunter is a classic shounen that follows the story of four aspiring hunters as they embark on a perilous adventure, fighting for their dreams while defying the odds.\n\n[Written by MAL Rewrite]\n                                \n                                        Hunters are specialized in a wide variety of fields, ranging from treasure hunting to cooking. They have access to otherwise unavailable funds and information that allow them to pursue their dreams and interests. However, being a hunter is a special privilege, only attained by taking a deadly exam with an extremely low success rate.\n\nGon Freecss, a 12-year-old boy with the hope of finding his missing father, sets out on a quest to take the Hunter Exam. Along the way, he picks up three companions who also aim to take the dangerous test: the revenge-seeking Kurapika, aspiring doctor Leorio Paladiknight, and a mischievous child the same age as Gon, Killua Zoldyck.\n\nHunter x Hunter is a classic shounen that follows the story of four aspiring hunters as they embark on a perilous adventure, fighting for their dreams while defying the odds.\n\n[Written by MAL Rewrite]",
    id: "hunter-x-hunter-128",
    image: "https://img.flawlessfiles.com/_r/300x400/100/45/c5/45c50af44712f05b30c9cbfba6283abb/45c50af44712f05b30c9cbfba6283abb.jpg"
}
function Details(){
    const { id } = useParams();
    const [animeRelated, setAnimeRelated] = useState<IAnimeRelated>();
    const [animeInfo, setAnimeInfo] = useState<IAnimeInfo>(animeInfoDefault)
    const [animeInfoMore, setAnimeInfoMore] = useState<IAniInfoMore >()
    const [showMoreDescFlag, setShowMoreDescFlag] = useState<boolean>(false)

    useEffect(()=>{
        if(id !== undefined) {
            getData(id);
        }
    },[])

    useEffect(()=>{
        let data = animeRelated?.infoX;
        if(data !== undefined) {
          //  let animeData: IAnimeInfo = data.shift()!;
           // setAnimeInfo( animeData );
           // console.log( data?.pop());
        }
    },[animeRelated])

    const getData =async(id:string)=>{
       let data:IAnimeRelated = await animeInfoApi(id);
       setAnimeRelated(data);
       let infoX = data.infoX;
       setAnimeInfo(infoX.shift()!);
        if(infoX !== undefined && infoX.length  ) 
        setAnimeInfoMore(infoX.shift()!)

     console.log(data.recommendation);
    }

   return(
    <Fragment>
        <Header />
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
                <p className="text-sm font-bold text-white mb-1">Studios: <span className="font-normal" >{animeInfoMore?.studio}</span></p>
                <p className="text-sm font-bold text-white mb-1">Producers: <span className="font-normal" >{animeInfoMore?.producer}</span></p>
            </section>
        <Footer />
    </Fragment>
   ) 
}

export default Details