import React from "react";
import "../App.css";

const Input = (props) => {
  return (
    <input
      className="input"
      type={props.type}
      onChange={props.onChange}
      value={props.value}
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
    ></input>
  );
};

export default Input;
