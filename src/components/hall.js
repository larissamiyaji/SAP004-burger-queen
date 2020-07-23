import React from "react";
import "../App.css";

const sendOrder = (event) => {
  event.preventDefault();
  console.log("Finalizando pedido");
};

const cancelOrder = (event) => {
  event.preventDefault();
  console.log("Cancelando pedido");
};

/* ABRE UM POP UP QUANDO CLICAR EM HAMBÚRGUER  
  const chooseBurger = (event) => {
    event.preventDefault();
    console.log("Turbinando Hambúguer");
}; */

/* const showPopup = (event) => {
  event.preventDefault();
  Modal.visibility = hidden;
  Modal.style = none;
};  */

const Hall = () => (
  <div className="hall-template">
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
    </section>

    {/*    CARD DE DETALHES DO PEDIDO */}
    <section className="order-card">
      <h2 className="menu-title text-align">Detalhes do Pedido</h2>
      <div className="order-details">
        <p>Nº do pedido: {}</p>
        <p>
          Nº da mesa:{" "}
          <input
            id="table-number"
            type="number"
            className="order-details-input input"
            placeholder="Insira o nº da mesa"
            required
          ></input>
        </p>
        <p>
          Cliente:{" "}
          <input
            id="client-name"
            type="text"
            className="order-details-input input"
            placeholder="Insira o nome do cliente"
            required
          ></input>
        </p>
      </div>
      <div className="menu-list text-align">
        <p>Ítem 1</p>
        <p>Ítem 2</p>
        <p>Ítem 3</p>
        <p>Ítem 4</p>
      </div>
      <div className="order-bottom-info">
        <p className="value-total">Total: R${}</p>
        <button
          type="submit"
          className="form-button cancel-button"
          onClick={cancelOrder}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="form-button send-order-button"
          onClick={sendOrder}
        >
          Finalizar
        </button>
      </div>
    </section>

    {/* CARD DE TURBINAR O HAMBÚRGUER  */}
    <section className="modal">
      <h2>Turbine seu hambúrguer</h2>
      <h3 className="edit-burger">Tipo de carne</h3>
      <div className="radio-buttons">
        <label>
          <input
            type="radio"
            name="meat-type"
            value="Bovino"
          ></input>
          Bovino
        </label>
        <label>
          <input type="radio" name="meat-type" value="Frango"></input>Frango
        </label>
        <label>
          <input type="radio" name="meat-type" value="Vegetariano"></input>
          Vegetariano
        </label>
      </div>
      <h3 className="edit-burger">Adicionais</h3>
      <div className="menu-list cheese-egg">
        <p>Queijo _____________ R$1,00</p>
        <p>Ovo _____________ R$1,00</p>
      </div>
      <button
        type="submit"
        className="form-button cancel-button"
        onClick={cancelOrder}
      >
        Cancelar
      </button>
      <button
        type="submit"
        className="form-button send-order-button"
        onClick={sendOrder}
      >
        Finalizar
      </button>
    </section>
  </div>
);

export default Hall;
