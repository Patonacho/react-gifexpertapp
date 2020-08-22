import React,{ useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = ( e )=>{
       // console.log(e.target.value);
        setInputValue(e.target.value);
    }
    const handSubmit = (e) => {
        e.preventDefault(); 
        //if corto 
        inputValue && setCategories( (category) => [ inputValue,...category] );      
        setInputValue('');
        // if( inputValue.trim().length>2){
        //     setCategories(casts=>[...casts,inputValue]);
        //     setInputValue('');
        // }
        //console.log('Submit hecho');
    }
    return (
        
        <form onSubmit={handSubmit}>
           <input 
           type="text"
           value={inputValue}
           onChange={handleInputChange}
           />
        </form>
        
    )
    
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}