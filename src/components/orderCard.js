import React from "react";
import "../App.css";
import Input from "./input";



const OrderDetails = () => {
  const sendOrder = (event) => {
    event.preventDefault();
    console.log("Finalizando pedido");
  };

  const cancelOrder = (event) => {
    event.preventDefault();
    console.log("Cancelando pedido");
  };
  const handleChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    console.log(value);
  }; // Captura o valor inserido pelo usuáario
  return (
    <section id="order" className="order-card">
      <h2 className="menu-title text-align">Detalhes do Pedido</h2>
      <div className="order-details form-box">
        <p className="clients-info">Nº do pedido: {}</p>
        <p className="clients-info">
          Nº da mesa:{" "}
          <Input
            id="table-number"
            type="number"
            className="order-details-input input"
            placeholder="Insira o nº da mesa"
            onChange={handleChange}
            required
          />
        </p>
        <p className="clients-info">
          Cliente:{" "}
          <Input
            id="client-name"
            type="text"
            className="order-details-input input"
            placeholder="Insira o nome do cliente"
            onChange={handleChange}
            required
          />
        </p>
      </div>
      <div className="menu-list text-align">
  <div><p>{}</p></div>
        <div><p>Ítem 2</p></div>
        <div><p>Ítem 3</p></div>
        <div><p>Ítem 4</p></div>
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
