// import React, { useEffect, useState } from "react";
// import { getGifs } from "../helpers/getGifs";

import useFetchGifs from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  
  const {data:images,loading} = useFetchGifs(category);  

 

  
  return (
    <>
      <h3 className="animate__animated animate__backInLeft">{category}</h3>
      
      {loading && <p className="animate__animated animate__pulse">Loading...</p>}
      <div className="card-grid">

      {images.map((img) => (
          //se utiliza agrega un objeto con el spread de img, trayendo cada una de las propiedas como una propiedad independiente del componente
          <GifGridItem key={img.id} {...img} />
        ))}
        {/* <ol> */}

        {/* Sin desestructuracion */}
        {/* {images.map((img) => (
          <li key={img.id}>
            {img.title}
            <div>
              <img alt={img.title} src={img.url} />
            </div>
          </li>
        ))} */}

        {/* Con desestructuracion, mas facil y rapido */}
        {/* {images.map(({id, title, url}) => (
          <li key={id}>
            {title}
            <div>
              <img alt={title} src={url} />
            </div>
          </li>
        ))} */}

        {/* </ol> */}

        
      </div>
    </>
  );
};
export default GifGrid;
