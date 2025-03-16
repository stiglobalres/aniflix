import { Fragment } from "react/jsx-runtime";
import Header from "../components/header";
import Footer from "../components/footer";
import { useEffect, useLayoutEffect, useState } from "react";
import { IAniInfoMore, IAnimeInfo, IAnimeRelated, IRecommendation } from "../common/interfaces/animeinfo";
import { animeInfoApi } from "../common/animeinfoapi";
import { useParams } from "react-router-dom";
import { RenderLoading } from "../components/loading";
import RenderAnimeInfo from "./_animeinfo";
import RenderRecommendation from "./_recommdation";
import UseTitle from "../common/doctitle";

function Details(){
    const { id } = useParams();
    const [animeInfo, setAnimeInfo] = useState<IAnimeInfo>()
    const [animeInfoMore, setAnimeInfoMore] = useState<IAniInfoMore >()
    const [recommendation, setRecommentdation] = useState<IRecommendation[]>([])
    const [showMoreDescFlag, setShowMoreDescFlag] = useState<boolean>(false)
    const [loading, setloading] = useState<boolean>(true)
    const [doctitle, setDocTitle] = useState<string>('')

    useEffect(()=>{
        if(id !== undefined) {
            setloading(true)
            getData(id);
            window.scrollTo(0,0);
        }
    },[id])

    useLayoutEffect(()=>{
        if(doctitle.length)
        UseTitle(doctitle);
    },[doctitle]);

    const getData =async(id:string)=>{
       let data:IAnimeRelated = await animeInfoApi(id);
       let infoX = data.infoX;
       
       let tmpAnimeInfo: IAnimeInfo = infoX.shift()!

       setDocTitle(tmpAnimeInfo.name + ' - English Sub/Dub Anime')
       
       setAnimeInfo(tmpAnimeInfo);

        if(infoX !== undefined  ) 
            setAnimeInfoMore(infoX.shift()!)

        setRecommentdation(data.recommendation);
        setloading(false)
    }

   return(
    <Fragment>
        <Header />
            {(loading)?
                <RenderLoading />
            :
                <>
                <RenderAnimeInfo animeInfo={animeInfo} animeInfoMore={animeInfoMore} showMoreDescFlag={showMoreDescFlag} setShowMoreDescFlag={setShowMoreDescFlag} />
                <RenderRecommendation data={recommendation} />
                </>
            }

        <Footer />
    </Fragment>
   ) 
}


export default Details