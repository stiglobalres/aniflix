import { Fragment } from "react/jsx-runtime";
import SideBar from "./sidebar";

export default function Header() {
    
    return(
        <Fragment>
            <div className="w-full py-4 px-4 fixed z-10 bg-white border-b drop-shadow-md flex items-center">
                 <SideBar />
                <h1 className="font-bold text-gray-500 text-lg leading-6"> 
                  AniFlix
                </h1>
            </div>

            <div className='w-full h-[5rem]' />
        </Fragment>
    )
}