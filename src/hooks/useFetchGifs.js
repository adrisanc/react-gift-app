import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

const useFetchGifs = ( category ) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  // useEffect(() => {
  //retorna un promesa como solo tiene un argumento se deja asi como esta solo se pasa eso como argumento
  //   getGifs(category).then(setimages);
  // }, [category]);

    //Se debe pasar como segundo parametro un arreglo para que el use efect de la funcion asyncrona solo se ejecute una vez, así evitar un ciclo infinito cada vez que se actualiza el componente

    //los efectos no pueden ser async
  useEffect(() => {
    getGifs(category).then((imgs)=> {

        setstate({
            data:imgs,
            loading:false
        })
    })
  }, [category]);

  return state; //{data:[], loading true}
};

export default useFetchGifs;
