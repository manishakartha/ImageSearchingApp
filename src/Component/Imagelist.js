import React  from "react";
import ImageShow from "./ImageShow";
import "./Imagelist.css"


export default function Imagelist({image}){
    const renderedImage = image.map((image)=>{
        return <ImageShow list={image} key={image.id}/>

    })
    return(
        <div  className="image-list">
            {renderedImage}
        </div>
    )
}