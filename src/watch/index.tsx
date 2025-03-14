import { Fragment } from "react/jsx-runtime";
import Header from "../components/header";
import Footer from "../components/footer";
import Screen from "./_screen";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Watch() {
    let { aniId } = useParams();
    
    return (
        <Fragment>
            <Header />
                <Screen id={aniId} />
            <Footer />
        </Fragment>
    )
}

export default Watch;