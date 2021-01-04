import React, { useState } from 'react';
import PropTypes from 'prop-types'
import "../src/index.css";
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

//////////////////////////////////////////////////////////////////////////////////

const GifExpertApp = ( {saludo} ) => 
{
    
    const [ categories, setCategories ] = useState( [ "html" ] );

/***************************************************************************************************** */

    return(

        <>

            <AddCategory setCategories={ setCategories }/>

            <br/>
            <hr/>

            { categories.map( ( element )=> <GifGrid key={ element } category={ element } /> ) }

        </>
    );

};

/////////////////////////////////////////////////////////////////////////////

GifExpertApp.propTypes = 
{
    saludo:PropTypes.string.isRequired
};

///////////////////////////////////////////////////////////////////////////////

export default GifExpertApp;

