import React  from "react";

export default function ImageShow({list}){
    return(
        <div>
            <img  src ={list.urls.small} alt={list.alt_description}/>
        </div>
    )
}