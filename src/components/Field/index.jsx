import React from "react";
import "./Field.scss";

const Field = ({ labelID, labelText, className, ...props }) => {
    return (
        <>
            <label htmlFor={labelID}>{labelText}</label>
            <input className={`input ${className}`} {...props} />
        </>
    );
};

export default Field;
