import React, { useState } from 'react'
import PropTypes from 'prop-types'


const AddCategory = ({setCategories}) => 
{

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) =>
    {
        setInputValue(event.target.value);// event.target.value toma el valor actual que contine el input
    }

    const handleSubmit = (event) =>
    {
        event.preventDefault();//evita que el navegador se refresque

        if(inputValue != "")
        {
            setCategories((element)=>[inputValue,...element]);
            setInputValue("");
        }
        else
        {
            alert("no se ingresan valores vacios");
        }

    } 


    return (
        
        <form onSubmit={ handleSubmit }>
 
           <input type="text" value={inputValue} onChange={ handleInputChange }/>

        </form>
    )
}


AddCategory.propTypes = {

    setCategories: PropTypes.func.isRequired

}

export default AddCategory
