import React from "react";
import "../App.css";

const OrderModal = () => {
  const sendOrder = (event) => {
    event.preventDefault();
    console.log("Finalizando pedido");
  };

  const cancelOrder = (event) => {
    event.preventDefault();
    console.log("Cancelando pedido");
    OrderModal.hidden = true;
  };
  return (
    <section className="modal">
      <h2>Turbine seu hambúrguer</h2>
      <h3 className="edit-burger">Tipo de carne</h3>
      <div className="radio-buttons">
        <label>
          <input type="radio" name="meat-type" value="Bovino"></input>
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
  );
};

export default OrderModal;
