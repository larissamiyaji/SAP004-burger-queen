import React from "react";
import firebase from "firebase";
import "../App.css";

const ButtonLogout = ({ children }) => {
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        window.location.href = "/";
        console.log("Logging out");
      });
  };
  return (
    <button className="logout-position form-button" onClick={logout}>
      {children}
    </button>
  );
};

export default ButtonLogout;
