import React, { InputHTMLAttributes } from 'react';
import './Input.css';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string
}

const Input: React.FC<InputProps> = ({name, label, ...rest}) => {
    return (
        <div className="input-field">
          <label htmlFor={name}>{label}</label>
          <input name={name} id={name} {...rest}/>
        </div>
    )
};

export default Input;