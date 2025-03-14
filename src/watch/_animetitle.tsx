import { Switch } from "@mui/material";
import { IAnimeTitleProps } from "../common/interfaces/episode";

function RenderAnimeTitle(props: IAnimeTitleProps) {
    const { episode, loadingVid, dubswitch } = props;
    if(episode?.order === undefined) return <></>
    return(
        <div className="py-2 w-full h-12 sm:max-w-[35rem] flex justify-between">
            <div>
                <p className="text-sm font-medium">Ep.{episode?.order} - {episode?.name}</p>
            </div>
            <div>
                <Switch disabled={loadingVid} size="small" onChange={dubswitch} name="DUB"/>
                <span className="text-xs">DUB</span>
            </div>
        </div>
    )
}

export default RenderAnimeTitle