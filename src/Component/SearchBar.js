import React, { useState } from "react";
import './SearchBar.css'

export default function SearchBar({onSubmit}){
    const[term,setTerm]= useState('');
    const handleChange =(e)=>{
        setTerm(e.target.value)
    };

    const handleFormSubmit =(e)=>{
        e.preventDefault();
        onSubmit(term)
    };
    
    return(
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label>Enter Search Term</label>
           <input onChange={handleChange} value={term}/>
           </form>
           
        </div>
    )
}