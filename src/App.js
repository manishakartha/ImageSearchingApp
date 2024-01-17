
import { useState } from 'react';
import './App.css';
import SearchBar from './Component/SearchBar';
import searchImages from './api'; 
import Imagelist from './Component/Imagelist';

function App() {
  const[image,setImage]=useState([])
  const handleSubmit = async(term)=>{
    
    const result = await searchImages(term);
    console.log('do a search with',result );
    console.log(term);
    setImage(result);
  }
  return (
    <div className="App">
      <SearchBar onSubmit ={handleSubmit}/>
      <Imagelist image={image}/>
      
    </div>
  );
}

export default App;
