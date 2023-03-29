import React from "react";
import "./Button.scss"

const Button = ({ className, text, ...props }) => {
    return (
        <button className={`button ${className}`} {...props}>
            {text}
        </button>
    );
};

export default Button;