interface response {
    ok: boolean,
    json: any
}
const getResponse = async(res: response) => {
    if(!res.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await res.json();
    return data;
}

export const fetchData = async(url: string) =>{
    try {
        const response = await fetch(url);
        return await(getResponse(response));
    }
    catch(err) {
        console.log('Error', err);
    }
}