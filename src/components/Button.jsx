import React from "react";
import "../App.css";

// export const ButtonLogout = ({ children, onClick }) => {
//   return (
//     <button className="logout-position" onClick={onClick}>
//       {children}
//     </button>
//   );
// };
const Button = (props) => {
  return (
    <button
      id={props.id}
      className={props.class}
      type={props.type}
      onClick={props.onClick}
      value={props.value}
      handleClick={props.handleClick}
    >
      {props.name}
      {props.price}
    </button>
  );
};
export default Button;
