import React, { InputHTMLAttributes } from "react";
import "./Input.css";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const Input: React.FC<InputProps> = ({ name, label, required, ...rest }) => {
  return (
    <div className="input-field">
      <label htmlFor={name}>
        {label}
        {required ? " *" : ""}
      </label>
      <input name={name} id={name} required={required} {...rest} />
    </div>
  );
};

export default Input;
