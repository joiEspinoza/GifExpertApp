import React from 'react'
//import React, { useState,useEffect } from 'react'
import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem';
import "../../src/index.css";
import { useFechHook } from '../hooks/useFechHook';

const GifGrid = ({category}) =>
 {

    const { data:images,loading } = useFechHook(category);

    return (
       
        <>

            <h3>{category}</h3>

            {loading && <p>Cargando...</p>}

            <div className="cardGrid">
            
                { images.map( (img)=><GifGridItem key={img.id} {...img} /> ) }
                
            </div>

        </>
    )
}


GifGrid.propTypes = {

}


export default GifGrid
