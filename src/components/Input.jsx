import React from "react";

const Input = (props) => {
  return (
    <input
      type={props.type}
      id={props.id}
      className={props.class}
      placeholder={props.placeholder}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    ></input>
  );
};

export default Input;

// type={props.type}
// onChange={props.onChange}
// value={props.value}
// id={props.id}
// name={props.name}
// placeholder={props.placeholder}
