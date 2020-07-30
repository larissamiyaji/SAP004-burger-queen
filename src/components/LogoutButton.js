import React from "react";
import "../App.css";

const ButtonLogout = ({ children, onClick }) => {
  return (
    <button className="logout-position" onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonLogout;
