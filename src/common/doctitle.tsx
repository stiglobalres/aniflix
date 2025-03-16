import { useEffect } from "react";

function UseTitle(title:string) {
    document.title = title;
    /*
    useEffect(()=>{
        const prevTitle = document.title;
        document.title = title;
        return () =>{
            document.title =  prevTitle;
        }
    })
    */
}

export default UseTitle;