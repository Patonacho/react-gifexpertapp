import React,{ useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
//import PropTypes from 'prop-types';
//import React, { Fragment } from 'react';
// function Component 

const GifExpertApp = () => {
    
//const categories = ['One Push','Samurai X','Dragon Ball']
const [categories, setcategories] = useState(['One Push']);

// const handleAdd = ()=>{
//    // setcategories([...categories,'HunterXHunter']);
//     setcategories(cats =>[...cats,'HunterXHunter']);
//     console.log(categories);
// }
    return (       
        <>
            <h2> GifExpertApp </h2>
            <AddCategory setCategories={setcategories}/>
            <hr></hr>
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                { 
                categories.map((category)=> (
                <GifGrid 
                key={category}
                category={category} />
                ))
                }
            </ol>
        </>        
    );
}
export default GifExpertApp;