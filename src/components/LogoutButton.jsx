import React from "react";
// import firebase from "../firebase";
import "../App.css";
import LogoutImage from "./images/logout.png"

const ButtonLogout = (props) => {
  // const logout = () => {
  //   firebase
  //     .auth()
  //     .signOut()
  //     .then(() => {
  //       window.location.href = "/";
  //       console.log("Logging out");
  //     });
  // };
  return (
    <button className="logout-position" onClick={props.onClick}>
      <img src={LogoutImage} alt="" className="logout-image"/>
      {props.name}
    </button>
  );
};

export default ButtonLogout;
