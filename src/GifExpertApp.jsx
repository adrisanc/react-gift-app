import { useState } from "react";
import AddCategory from "./Components/AddCategory";
import GifGrid from "./Components/GifGrid";

const GiftExpertApp = ( ) => {

    const [categories, setCategories] = useState(['One Piece']);

    // const handleAdd = () => { 
        //Si quiero el numero elemento de primeras pongo el primero el valor del elemento y despues el spread del array así => ['One Piece', ...categories]

        //Otra manera valida de actualizar el estado es asi
        // setcategories([...categories,'One Piece'])

    
    //     setcategories( cats => [...cats, 'One Piece'])

    // }

    return(
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                {categories.map( category => (
                    <GifGrid key={category} category={category}/>
                ))}
            </ol>
        </>
    )
}

//Video 08 seccion 6

export default GiftExpertApp;