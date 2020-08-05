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
    <button className="form-button" {...props} /*onClick={props.onClick} id={props.id}*/>
      {props.name} {props.title} {props.price} 
    </button>
  );
};
export default Button;
