
import "swiper/css";
import 'swiper/css/pagination';
import "swiper/css/autoplay";

import { ISlides,  ISlidesData } from "../common/interfaces/home"
import RenderCards from './bannercard';

import { Autoplay,Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


function Banner({data}: ISlidesData) {
  
    if(data.length === 0) return <></>
   
    return( 
        <div id="banner" className="w-full h-[20rem] mb-3">
          <Swiper
            modules={[ Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={true}
          >
            {data.map((data:ISlides) => <SwiperSlide key={data.animeId}><RenderCards key={data.animeId} data={data} /></SwiperSlide> )}
          </Swiper>


        </div>
    )
}

export default Banner