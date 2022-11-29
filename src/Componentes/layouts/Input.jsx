import React from "react";

const Input = ({ text, type, name, handleOnChange, content }) => {
    return (
        <div>
            <label htmlFor={name}>{text}</label>
            <input
                type={type}
                name={name}
                id={name}
                onChange={handleOnChange}
                content={content} />
        </div>
    )
}

export default Input;