import React from "react";
import "../App.css";
import OrderModal from "./orderModal.js";
import ButtonItem from "./buttonItem";

const turbinar = (event) => {
  event.preventDefault();
  console.log("Abrindo modal");
  OrderModal.hidden = false;
  window.location.href = "/hall#order-modal";
};


const Hall = () => {
  return (
    <div className="style" id="hall">
      {/* CARDÁPIO */}
      <section className="text-align menu-all">
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
