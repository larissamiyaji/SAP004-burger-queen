import React from "react";
import "../App.css";

const Button = (props) => {
  return (
    <button className="form-button" onClick={props.onClick} id={props.id}>
      {props.name} {props.title}
    </button>
  );
};
export default Button;
