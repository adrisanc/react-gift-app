import { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ( {setCategories}) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // inputValue !== '' &&  setCategories( cats => [...cats, inputValue])

        if (inputValue.trim().length > 2) {
            setCategories(category => [ inputValue, ...category]);
            setinputValue('')
        }
       
    }

    return (
        <form onSubmit={handleSubmit}>
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
export default AddCategory;




