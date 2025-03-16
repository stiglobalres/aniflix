import { useEffect, useState, Fragment } from 'react';
import Header from '../components/header';
import Banner from '../components/banner';

import { HomeApi } from '../common/homeapi';
import { ITrend, ISlides, IUpcomingAnime } from '../common/interfaces/home';
import Trending from './_tending';
import LatestEpisode from './_latest';
import Footer from '../components/footer';
import UseTitle from '../common/doctitle';
import { RenderLoading } from '../components/loading';


function Home() {
    const [trends, setTrends] = useState<ITrend[]>([])
    const [slides, setSlides] = useState<ISlides[]>([])
    const [UpcomingAnime, setUpcomingAnime] = useState<IUpcomingAnime[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    UseTitle('AniFlix Free Anime Streaming - Home');
    useEffect(()=>{
        getData();
    },[])

    const getData = async() => {
        let data = await HomeApi();
        setTrends(data?.trend);
        setSlides(data?.slides);
        setUpcomingAnime(data?.UpcomingAnime);
        setLoading(false)
    }

    return (
        <Fragment>
            <Header />
            {(loading)?
                <RenderLoading />
            :
            <>
                <Banner data={slides} />
                <Trending data={trends} />
                <LatestEpisode data={UpcomingAnime} />
            </>
            }
            <Footer />
        </Fragment>
    )
}

export default Home;