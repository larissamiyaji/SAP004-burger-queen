import React from "react";
import firebase from "firebase";
import "../App.css";

const db = firebase.firestore();
db.collection("menu").get().then((snapshot) => {
  snapshot.docs.forEach((doc) => {
    console.log(doc.data())
  })
})

// const showMenu = () => {
// }
// console.log(showMenu)

const Menu = () => {
  return <section></section>;
};

export default Menu;
