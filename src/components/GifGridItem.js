import React from 'react'
import "../../src/index.css";

////////////////

const GifGridItem = ( { title,url } ) => 
{

    return (

        <div className="card animate__animated animate__bounce">
            
            <center><img src={ url } alt={ title }/></center>

        </div>
    );
};

//////////////////

export default GifGridItem;
