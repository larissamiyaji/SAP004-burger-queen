import React from "react";

const Button = (props) => {
  return (
    <button className="form-button" {...props}>
      {props.name} {props.title} {props.price} 
    </button>
  );
};
export default Button;