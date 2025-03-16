import { Link } from "react-router-dom"

interface typePropsType {
    id?: string,
    name?: string,
    image?: string,
    format?: string | number,
    duration?: string
}
const RenderTiles:React.FC<typePropsType>=({ id, name, image, format, duration })=>{
    return (
        <section>
            <Link to={"/details/"+id} >
                <img src={image} alt={name} className="object-cover h-40  w-28 sm:h-72 sm:w-48 rounded-md  mb-1" />
            </Link>
            <Link to={"/details/"+id} title={name} >
                <p className="text-sm font-bold line-clamp-1">{name}</p>
            </Link>
            <p className="text-sm font-light">{format} - {duration}</p>
        </section>
    )
}

export type { typePropsType }

export default RenderTiles
 