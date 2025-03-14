import { Fragment } from "react/jsx-runtime";
import { IEpisodeProps } from "../common/interfaces/episode";
import { Divider } from "@mui/material";

function RenderList(props: IEpisodeProps) {
    const { data, selectAnime } = props;
    if(data.epId === undefined) return <></>
    return(
        <Fragment>
            <button className="cursor-pointer mx-1 text-left" type="button"  onClick={(e)=>selectAnime(e, data)}    >
                <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-1p4qrhw-MuiListItem-root">
                    <span  className="text-xs font-light">{`Ep. ${data.order}: ${data.name}`}</span>
                    
                </li>
            </button>
            <Divider />
        </Fragment>
    )
}

export default RenderList;