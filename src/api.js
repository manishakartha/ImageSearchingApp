import React from "react";
import axios from  "axios"

const searchImages= async(term)=>{
 
   const response= axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID RVrxVPT87hq8SzOFXon5h1vaaryKEasgY4Ca_XT1OEs'
        },
        params:{
            query:term
        }
    });
    return (await response).data.results
}
export default searchImages;