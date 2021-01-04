import { useEffect, useState } from "react"
import { getGif } from "../helpers/getGift";

////////

export const useFechHook = ( category ) =>
{

    const initialState = 
    {
        data:[],
        loading:true
    };

    const [ state, setState ] = useState( initialState );

    useEffect( () => 
    {

        getGif( category ).then( imgs => {
                
            setTimeout( () =>
            {

                setState(

                    {
                        data: imgs,
                        loading: false
                    }
                ); 

            },3000)

        })

    },[ category ]);
        
    return state;

};