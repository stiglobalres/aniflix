import { Fragment } from "react/jsx-runtime"
import { IRecommendation } from "../common/interfaces/animeinfo"
import RenderTiles from "../components/tiles"
import { ThumbUpAlt } from "@mui/icons-material"

interface recommendationProps {
    data:IRecommendation[] 
}

export default function RenderRecommendation({ data }:recommendationProps) {
    return(
        <Fragment>
            <section className="mx-8 mt-8">
                <section className="my-4">
                    <p className="font-bold text-lg text-gray-500">
                        Recommendation <ThumbUpAlt fontSize="medium" className="text-red-700" />
                    </p>
                </section>
            </section>
            <section className="mx-8 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {data.map((item:IRecommendation)=> <RenderTiles key={item.xid} id={item.xid} name={item.name} image={item.image} format={item.format} duration={item.duration} /> )}
            </section>
        </Fragment>
    )
}