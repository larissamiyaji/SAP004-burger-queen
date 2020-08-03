import React from "react";
// import firebase from "../firebase";
import "../App.css";

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
      {props.name}
    </button>
  );
};

export default ButtonLogout;


// const ButtonLogout = ({ children, onClick }) => {
//   return (
//     <button className="logout-position" onClick={onClick}>
//       {children}
//     </button>
//   );
// };