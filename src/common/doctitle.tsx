import { useEffect } from "react";
import { DOC_TITLE } from "./constant";

function useTitle(title:string) {
    useEffect(()=>{
        const prevTitle = document.title;
        document.title = DOC_TITLE + title;
        return () =>{
            document.title =  prevTitle;
        }
    })
}

export default useTitle;