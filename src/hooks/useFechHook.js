import { useEffect, useState } from "react"
import { getGif } from "../helpers/getGift";

export const useFechHook = (category) =>
{
    const [state, setState] = useState({
        data:[],/////asdasdsad
        loading:true
    });

    useEffect( () => {

        getGif( category ).then( imgs => {
                
            setTimeout(()=>{

                setState({
                    data: imgs,
                    loading: false
                });
            },3000)

        })

    },[category])
        
    return state;
}