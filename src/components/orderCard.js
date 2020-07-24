import React from "react";
import "../App.css";

const OrderDetails = () => {
  const sendOrder = (event) => {
    event.preventDefault();
    console.log("Finalizando pedido");
  };

  const cancelOrder = (event) => {
    event.preventDefault();
    console.log("Cancelando pedido");
  };
  return (
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
  );
};

export default OrderDetails;
