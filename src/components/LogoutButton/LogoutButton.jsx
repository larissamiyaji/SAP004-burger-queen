import React from "react";
import LogoutImage from "../images/logout.png";

const ButtonLogout = (props) => {
  return (
    <button className="logout-position" onClick={props.onClick}>
      <img src={LogoutImage} alt="" className="logout-image" />
      {props.name}
    </button>
  );
};

export default ButtonLogout;
