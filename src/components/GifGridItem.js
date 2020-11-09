import React from 'react'
import PropTypes from 'prop-types'
import "../../src/index.css";

const GifGridItem = ({title,url}) => 
{

    return (

        <div className="card animate__animated animate__bounce">
            
            <center><img src={url} alt={title}/></center>
            <hr/>
            <hr/>
            <p>{title}</p>

        </div>
    )
}

GifGridItem.propTypes = {

}

export default GifGridItem
