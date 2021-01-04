import React, { useState } from 'react'
import PropTypes from 'prop-types'

///////////////////

const AddCategory = ( { setCategories } ) => 
{

    const [ inputValue, setInputValue ] = useState( "" );

    const handleInputChange = ( event ) =>
    {
        setInputValue( event.target.value );
    };

    const handleSubmit = ( event ) =>
    {
        event.preventDefault();

        if( inputValue !== "" )
        {
            setCategories( ( element ) => [ inputValue, ...element ] );

            setInputValue( "" );
        }
        else
        {
            alert("Category is required");
        }

    };


/********************************************************************************************* */

    return (
        
        <form onSubmit={ handleSubmit }>
 
           <input type="text" style={ { padding : 10 } } placeholder="Insert category" value={ inputValue } onChange={ handleInputChange }/>

        </form>
    );
};

//////////////////////

AddCategory.propTypes = 
{

    setCategories: PropTypes.func.isRequired

};

/////////////////////////

export default AddCategory;
