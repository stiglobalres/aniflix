import { TrendingUp } from "@mui/icons-material";
import {  ITrend, ITrendData } from "../common/interfaces/home";
import { Fragment } from "react/jsx-runtime";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Trending({data}: ITrendData){
    const [sliderSetting, setSliderSetting] = useState<number>(4)
    useEffect(()=>{
        slidePreview();
        window.addEventListener('resize', slidePreview);

        return ()=> {
            window.removeEventListener('resize', slidePreview);
        }
    },[])

    const slidePreview=()=>{
        setSliderSetting(
            window.innerWidth <= 550 ? 2
            : window.innerWidth <= 720 ? 3
            : window.innerWidth > 720 ? 4
            : 4
        )
    }

    if(data.length === 0) return<></>
    return (
        <Fragment>
            <section className="mt-8 mx-8">
                <p className="font-bold text-lg text-gray-500">
                    Trending 
                    <TrendingUp fontSize="medium" className="text-red-700" />
                </p>
            </section>
            <section id="trending" className="mx-8 h-[14rem]">
                <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={sliderSetting}
                navigation
            >
                    {data.map((trend:ITrend)=>  <SwiperSlide key={trend.iD}><Card key={trend.iD} data={trend} /></SwiperSlide> )}
                </Swiper>
            </section>
        </Fragment>        
    )
}

interface propType {
    data: ITrend;
}

const Card:React.FC<propType> =({data})=> {
    return(
        <Link to={"/details/"+data.iD}>
            <section className="m-4 w-full ">
                <section className=" h-[11rem] flex" >
                    <div className="px-2 " >
                        <p className="text-lg font-bold text-red-700">{data.ranking}</p>
                        <p className="line-clamp-1 h-[10rem] text-sm mode-vertical-lr">{data.name}</p>
                    </div>
                    <div>
                        <img src={data.imgAni} alt={data.name}  />
                    </div>
                </section>
            </section>
        </Link>
    )
}


export default Trending;

