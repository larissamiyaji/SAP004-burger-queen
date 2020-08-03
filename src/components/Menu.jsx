import React from "react";
// import firebase from "../firebase";
import "../App.css";

const Menu = (props) => {
  // const db = firebase.firestore();
  // db.collection("menu")
  //   .get()
  //   .then((snapshot) => {
  //     snapshot.docs.forEach((doc) => {
  //       console.log("Collection Menu", doc.data());
  //     });
  //   });
  return (
    <section>
      <h2>{props.title}</h2>
      <div className="menu-list">
        {props.children}
      </div>
    </section>
  );
};

export default Menu;
