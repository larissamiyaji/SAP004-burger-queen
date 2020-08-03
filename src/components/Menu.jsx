import React from "react";
import firebase from "../firebase";
import "../App.css";


const Menu = () => {
  const db = firebase.firestore();
  db.collection("menu")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        console.log("Collection Menu", doc.data());
      });
    });
  return (
    <section>
      
    </section>
  );
};

export default Menu;
