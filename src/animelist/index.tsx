import { Fragment } from "react/jsx-runtime";
import Footer from "../components/footer";
import Header from "../components/header";
import {  useEffect, useState } from "react";
import { getAnimeList } from "../common/animelist";
import { IAnimeList, IAnimeListInfo } from "../common/interfaces/animelist";
import { useParams } from "react-router-dom";
import { RenderLoading } from "../components/loading";

export default function AnimeList () {
    const { mix, page } = useParams();
    const [list, setList] = useState<IAnimeListInfo[]>()
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(()=>{
        let xPage : number = (page !== undefined) ? Number(page) :1;
       // if(mix !== undefined)
          //  getData(mix, xPage)
    },[mix, page])

    const getData=async(name: string, page: number)=>{
        setLoading(true);
        let data:IAnimeList = await getAnimeList(name, page)
        if(data.mixAni !== undefined) {
            setList(data?.mixAni);
        }
        setLoading(false)

        console.log(data)
    }

    return(
        <Fragment>
            <Header />
            {(loading)?
                <RenderLoading />
            :
            <section className="mx-8 my-4">
                <section className="my-4">
                    <p className="font-bold text-lg text-gray-500 capitalize">
                        { mix?.replace("-"," ")}
                    </p>
                </section>

                <section>
                   
                </section>
            </section>
            }
            <Footer />
        </Fragment>
    )
}
