import { Link } from 'react-router-dom';
import { ISlides} from "../common/interfaces/home"
import {PlayCircle, CalendarToday, ChevronRight, Schedule } from '@mui/icons-material';


interface propType {
    data: ISlides
}

const RenderCards:React.FC<propType> = ( {data}) => {
    return (
        <section className="flex">
            <div className="w-full h-[20rem] absolute bg-gradient-to-r from-black/65 to-black/20"></div>
            <div className="w-full h-[20rem] absolute pl-12 pt-12 pr-12">
                <div className="grid grid-cols-2">
                    <div>
                        <p className="font-bold text-yellow-100 pb-3 w-[60%] ">{data.spotlight}</p>
                    </div>
                    <div className="flex justify-end">
                        <span className="text-sm mr-3 text-white shadow-sm " ><PlayCircle fontSize='small' /> {data.format}</span>
                        <span className="text-sm mr-3 text-white shadow-sm"><Schedule fontSize='small' /> {data.duration}</span>
                        <span className="text-sm mr-3 text-white shadow-sm"><CalendarToday fontSize='small' /> {data.release}</span>
                    </div>
                </div>
                <p className="font-semibold text-white  mb-1  w-[60%] line-clamp-2">{data.name}</p>
                <p className="font-light text-sm  text-white  mb-3 w-[60%] line-clamp-3">{data.anidesc}</p>

                <div className="flex">
                    <Link to={"/watch/"+data.animeId} className="bg-red-700 text-white rounded-md px-5 py-2.5 me-2 mb-2 text-sm">
                        Watch Now <PlayCircle fontSize='small' />
                    </Link>
                    <Link to={"/details/"+data.animeId} className="bg-gray-600 text-white rounded-md px-5 py-2.5 me-2 mb-2 text-sm">
                        Details  <ChevronRight fontSize='small' />
                    </Link>
                </div>
            </div>
             <img src={data.imageAnime} className="w-[100vw] h-[20rem] object-cover " alt={data.name} />
        </section>
    )
}

export default RenderCards;