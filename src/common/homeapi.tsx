import { HOME_API } from './constant'

import { fetchData } from './api'


export const HomeApi= async()=>{
    try {
        const data = await fetchData( HOME_API());
        return data;
    }
    catch(e) {
        console.log('Error', e);
    }
}