import CircularProgress from "@mui/material/CircularProgress";
import { Fragment } from "react/jsx-runtime";

export function RenderLoading() {
    return(
        <Fragment>
            <section className="w-full h-[80vh] grid justify-center items-center">
                <CircularProgress size="3rem" />
            </section>
        </Fragment>
    )
}
