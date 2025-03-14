import { IUpcomingAnime } from "../common/interfaces/home"
import { Link } from "react-router-dom"

interface propType {
    data: IUpcomingAnime
}
interface typePropsType {
    id: string,
    name: string,
    image: string,
    format: string,
    duration: string
}
const RenderTiles:React.FC<propType>=({ data })=>{
    return (
        <section>
            <Link to={"/watch/"+data.idani} >
                <img src={data.imgAnime} alt={data.name} className="object-cover h-40  w-28 sm:h-72 sm:w-48 rounded-md  " />
            </Link>
            <Link to={"/details/"+data.idani} title={data.name} >
                <p className="text-sm font-bold line-clamp-1">{data.name}</p>
            </Link>
            <p className="text-sm font-light">{data.format} - {data.release}</p>
        </section>
    )
}

export type { typePropsType }

export default RenderTiles
 