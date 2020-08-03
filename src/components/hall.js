import React from "react";
import "../App.css";
import ButtonItem from "./buttonItem";
import orderDetails from "./orderCard";
import firebase from "../firebase";


/* ABRE UM POP UP QUANDO CLICAR EM HAMBÚRGUER  
  const chooseBurger = (event) => {
    event.preventDefault();
    console.log("Turbinando Hambúguer");
}; */



const Hall = () => {
 
  firebase.firestore().collection("menu").get().then((snapshot)=>{
    snapshot.docs.forEach((doc)=>{
      console.log(doc.data())
    })
   
    
  })


  return (
  <div className="style">
    {/* CARDÁPIO */}
    <section className="text-align menu-all">
      <h2 className="menu-title">Café da Manhã</h2>
      <div className="menu-list">
      
      <ButtonItem name ="Café Americano" price="5"  />
        <ButtonItem name ="Café com Leite" Price="7"  />
        <ButtonItem name ="Misto Quente" price="10"  />
        <ButtonItem name ="Suco de Fruta" price="7"  />
      </div>
      <h2 className="menu-title">Hambúrguer</h2>
      <div className="menu-list">
      <ButtonItem name ="Hambúrguer Simples" price="10"  />
      <ButtonItem name ="Hamburguer Duplo" price="15"  />
      </div>
      <h2 className="menu-title">Acompanhamentos</h2>
      <div className="menu-list">
      <ButtonItem name ="Batata Frita" price="5"  />
        <ButtonItem name ="Anéis de Cebola" price="5"  />
      </div>
      <h2 className="menu-title">Bebidas</h2>
      <div className="menu-list">
      <ButtonItem name =" Água 500ml" price="5" />
        <ButtonItem name =" Água 750ml" price="7" />
        <ButtonItem name =" Refrigerante 500ml" price="7"  />
        <ButtonItem name =" Refrigerante 750ml" price="10"  />
       
        
      </div>
      <button
        type="submit"
        className="form-button send-order-button"
        onClick={() => console.log("Turbinando")}
      >
        Turbinar
      </button>
    </section>
      {/* <button className="form-button">Logout</button> */}
  </div>
);}

export default Hall;