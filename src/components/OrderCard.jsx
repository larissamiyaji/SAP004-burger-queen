import { firebaseStore } from "../firebase";
import firebase from "../firebase";
import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Button from "./Button";
import "../App.css";
import Hall from "./Hall";

const OrderDetails = (props) => {
  const [order, setOrder] = useState(1);
  const [table, setTable] = useState("");
  const [client, setClient] = useState("");
  const [allday, setAllday] = useState(false);

  firebase
    .firestore()
    .collection("orders")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        console.log(doc.data());
      });
    });

  useEffect(() => {}, [order, table, client]);

  const cancelOrder = (event) => {
    event.preventDefault();
    console.log("Cancelando pedido");
  };
  const sendOrder = (order) => {
    const orderNumber = parseInt(order + 1);
    return setOrder(orderNumber);
  };

  const prevent = (event) => {
    event.preventDefault();
    newOrder(order, table, client);
    sendOrder(order);
  };

  const newOrder = (order, table, client) => {
    firebaseStore
      .collection("orders")
      .add({
        order: order,
        status: "pedido em andamento",
        table: table,
        client: client,
      })
      .then((docs) => {
        alert("Pedido enviado");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <section id="order" className="order-card">
      <h2 className="menu-title text-align">Detalhes do Pedido</h2>
      <div className="order-details">
        <p>Nº do pedido: {order}</p>
        <input
          id="table-number"
          type="number"
          name={table}
          className="order-details-input input"
          placeholder="Insira o nº da mesa"
          required
          onChange={(e) => setTable(e.currentTarget.value)}
        ></input>

        <input
          id="client-name"
          type="text"
          className="order-details-input input"
          placeholder="Insira o nome do cliente"
          value={client}
          onChange={(e) => setClient(e.currentTarget.value)}
        ></input>
      </div>
      <div className="menu-list text-align">
        <div></div>
        <div>
          <p>Ítem 2</p>
        </div>
        <div>
          <p>Ítem 3</p>
        </div>
        <div>
          <p>Ítem 4</p>
        </div>
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
          onClick={prevent}
        >
          Finalizar
        </button>
      </div>
    </section>
  );
};

export default OrderDetails;
