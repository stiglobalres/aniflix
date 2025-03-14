import { Fragment } from "react/jsx-runtime";
import {  IUpcomingAnime, IUpcomingAnimeData } from "../common/interfaces/home";
import {  KeyboardArrowDown, KeyboardArrowUp, SmartDisplay } from "@mui/icons-material";
import RenderTiles, { typePropsType } from "../components/tiles";
import {  Divider } from "@mui/material";
import { useEffect, useState } from "react";

function LatestEpisode({data}:IUpcomingAnimeData) {
    const [showMore, setShowMore] = useState<number>(12);
    const [ showMoreFlag, setShowMoreFlag] = useState<boolean>(false);
    useEffect(()=>{
        tilesPerView();
        window.addEventListener('resize', tilesPerView);

        return()=>  {
            window.removeEventListener('resize', tilesPerView);
        }
    },[])

    const tilesPerView =()=>{
        setShowMore(
            window.innerWidth > 1022 ? 15 : 12
        )
    }

    if(data.length === 0) return <></>
    
    const showMoreAction =(flag: boolean) => () =>{
        setShowMoreFlag(flag);
        setShowMore(
            flag ? data.length : 12
        )
    }

    return(
        <Fragment>
            <section className="mx-8 ">
                <section className="my-4">
                    <p className="font-bold text-lg text-gray-500">
                        Latest Episodes  <SmartDisplay fontSize="medium" className="text-red-700" />
                    </p>
                </section>
            </section>

            <section className="mx-8 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
               {data.slice(0,showMore).map((item:IUpcomingAnime) => <RenderTiles key={item.idani} data={item} /> ) }       
            </section>
            <div className="flex justify-center items-center h-8 mx-8 my-4">
                <div className=" w-[50%]"><Divider /></div>
                <div className="w-56 h-8 bg-white border rounded-full grid justify-center items-center ">
                    <button type="button" onClick={showMoreAction(!showMoreFlag)} className="text-gray-700 text-sm font-light cursor-pointer ">show {showMoreFlag ?"less" : "more "}  {(showMoreFlag)? <KeyboardArrowUp />:<KeyboardArrowDown />}</button>
                </div>
                <div className="w-[50%]"><Divider /></div>
            </div>
        </Fragment>
    )
}


export default LatestEpisode;