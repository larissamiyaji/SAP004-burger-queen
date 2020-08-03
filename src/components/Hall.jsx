import React from "react";
import OrderModal from "./OrderModal";
import ButtonItem from "./ButtonItem";
import firebase from "../firebase";
import "../App.css";
// import init from "../firebase";
// import orderDetails from "./orderCard";


/* ABRE UM POP UP QUANDO CLICAR EM HAMBÚRGUER  
  const chooseBurger = (event) => {
    event.preventDefault();
    console.log("Turbinando Hambúguer");
}; */

const Hall = () => {
  const turbinar = (event) => {
    event.preventDefault();
    console.log("Abrindo modal");
    OrderModal.hidden = false;
    window.location.href = "/hall#order-modal";
  };

  const menu = () => {
    firebase // Collection Menu - Traz no console o menu
    .firestore()
    .collection("menu")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        console.log("Collection Menu", doc.data());
      });
    }); 

    // firebase // Collection Users - Traz no console as informações dos usuários
    // .firestore()
    // .collection("users")
    // .get()
    // .then((snapshot) => {
    //   snapshot.docs.forEach((doc) => {
    //     const userId = doc.data().userId;
    //     const displayName = doc.data().displayName;
    //     const occupation = doc.data().occupation;
    //     console.log("DisplayName:", displayName);
    //     console.log("User ID:", userId);
    //     console.log("Ocupação:", occupation);
    //     console.log("----------------");
    //   });
    // }); 
  }
  

  return (
    <div className="style" id="hall">
      {/* CARDÁPIO */}
      <section className="text-align menu-all">
        <div onLoad={menu}>
          <button onClick={menu}>Show Menu</button>
        </div>


        <h2 className="menu-title">Café da Manhã</h2>
        <div className="menu-list">
          <ButtonItem Name="Café Americano" Price="5" />
          <ButtonItem Name="Café com Leite" Price="7" />
          <ButtonItem Name="Misto Quente" Price="10" />
          <ButtonItem Name="Suco de Fruta" Price="7" />
        </div>
        <h2 className="menu-title">Hambúrguer</h2>
        <div className="menu-list">
          <ButtonItem Name="Hambúrguer Simples" Price="10" />
          <ButtonItem Name="Hamburguer Duplo" Price="15" />
        </div>
        <h2 className="menu-title">Acompanhamentos</h2>
        <div className="menu-list">
          <ButtonItem Name="Batata Frita" Price="5" />
          <ButtonItem Name="Anéis de Cebola" Price="5" />
        </div>
        <h2 className="menu-title">Bebidas</h2>
        <div className="menu-list">
          <ButtonItem Name=" Água 500ml" Price="5" />
          <ButtonItem Name=" Água 750ml" Price="7" />
          <ButtonItem Name=" Refrigerante 500ml" Price="7" />
          <ButtonItem Name=" Refrigerante 750ml" Price="10" />
        </div>
        <button
          type="submit"
          className="form-button send-order-button"
          onClick={turbinar}
        >
          Turbinar
        </button>
      </section>
    </div>
  );
};

export default Hall;
