import React from 'react';

const TextInput = ({ type = "text", name, id, placeholder, value, onChange, required = false,className }) => {
    return (
        <input
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            className={className}
        />
    );
};

export default TextInput;
