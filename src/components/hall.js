import React from "react";
import "../App.css";

/* ABRE UM POP UP QUANDO CLICAR EM HAMBÚRGUER  
  const chooseBurger = (event) => {
    event.preventDefault();
    console.log("Turbinando Hambúguer");
}; */

const Hall = () => (
  <div>
    {/* CARDÁPIO */}
    <section className="text-align menu-all">
      <h2 className="menu-title">Café da Manhã</h2>
      <div className="menu-list">
        <p>Café Americano _____________ R$5,00</p>
        <p>Café com Leite _____________ R$7,00</p>
        <p>Misto Quente _______________ R$10,00</p>
        <p>Suco de Fruta ______________ R$7,00</p>
      </div>
      <h2 className="menu-title">Hambúrguer</h2>
      <div className="menu-list">
        <p>Hambúguer Simples _____________ R$10,00</p>
        <p>Hambúrguer Duplo _____________ R$15,00</p>
      </div>
      <h2 className="menu-title">Acompanhamentos</h2>
      <div className="menu-list">
        <p>Batata Frita _____________ R$5,00</p>
        <p>Anéis de Cebola _____________ R$5,00</p>
      </div>
      <h2 className="menu-title">Bebidas</h2>
      <div className="menu-list">
        <p>Água 500ml _____________ R$5,00</p>
        <p>Água 750ml _____________ R$7,00</p>
        <p>Refrigerante 500ml _______________ R$7,00</p>
        <p>Refrigerante 750ml ______________ R$10,00</p>
      </div>
      <button
      type="submit"
      className="form-button send-order-button"
      // onClick={}
    >
      Turbinar
    </button>
    </section>
  </div>
);

export default Hall;
