import React from "react";
import firebase from "../firebase.js";
import "../App.css";
/* PEGA A COLLECTION MENU NO FIREBASE*/

// const showMenu = () => {
  // }
  // console.log(showMenu)
  
  const Menu = () => {
    const db = firebase.firestore();
    db.collection("menu").get().then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        console.log("Collection Menu", doc.data())
      })
    })
  return <section></section>;
};

export default Menu;
