import React from "react";

const Button = ({ text, linkTo }) => {
    return (
        <a href={linkTo} className="Button">
            <h4>{text}</h4>
        </a>
    );
};

export default Button;