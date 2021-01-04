import React from 'react'
import GifGridItem from './GifGridItem';
import "../../src/index.css";
import { useFechHook } from '../hooks/useFechHook';

////////////////////

const GifGrid = ( { category } ) =>
 {

    const { data:images, loading } = useFechHook( category );

/********************************************************************************************* */

    return (
       
        <>

            <h3 style={ { color : "white" } }>{ "# "+category.toUpperCase() }</h3>

            { loading && <p style={ { color : "white" } }>Cargando...</p> }

            <div className="cardGrid">
            
                { images.map( ( img ) => <GifGridItem key={ img.id } { ...img } /> ) }
                
            </div>

            <hr/>

        </>
    );
};

////////////////////////////

export default GifGrid;
