import { firebaseStore } from "../firebase";
import firebase from "../firebase";  
import React, { useState, useEffect } from 'react';
import "../App.css"


function ButtonItem (props) {
    const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  firebase.firestore().collection("menu").get().then((snapshot)=>{
    snapshot.docs.forEach((doc)=>{
      console.log(doc.data())
    })
   
    
  })
       
    return( 
        <>
            <section>
            <button 
                onClick={() => props.onClick(props)}
                className="ButtonItem">
                <p>{props.name}</p>
                <p>R${props.price},00</p>
               
            </button>
            </section>
        </>
    )
}

export default ButtonItem;

