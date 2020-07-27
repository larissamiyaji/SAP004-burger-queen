import React from "react";
import "../App.css";
import firebase from "../firebase"

export const ButtonLogout = () => {
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        window.location.href = "/";
        console.log("Logging out");
      });
  };
  return <button className="form-button" onClick={logout}>Logout</button>;
};

const Button = (props) => {
  return (
    <button className="form-button" onClick={props.onClick} id={props.id}>
      {props.name} {props.title}
    </button>
  );
};
export default Button;
