import React from "react";


const Select = ({ text, name, options, handleCategory, value }) => {
    return (
        <div>
            <select name={name} id={name} onChange={handleCategory} value={value || ''}>
                <option>{text}</option>
                {options.map(option=>(
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select;