import { firebaseStore } from "../firebase";
import firebase from "../firebase";
import React, { useState, useEffect } from "react";
import Menu from "./Menu";
// import Button from "./Button";
import "../App.css";
// import Hall from "./Hall";

const OrderDetails = (props) => {
  const [breakfast /*, setBreakfast*/] = useState(true);
  const [allDay /*, setAllDay*/] = useState(false);
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState("");
  const [table, setTable] = useState("");
  const [client, setClient] = useState("");
  const [menu /*, setMenu*/] = useState("");
  // const [resume, setResume] = useState("");
  const [total, setTotal] = useState(0);
  const [pedido, setPedido] = useState("");
  // console.log(pedido);

  useEffect(() => {
    firebase
      .firestore()
      .collection("orders")
      .get()
      .then((querySnapshot) => {
        const orderNumber = querySnapshot.size;
        // console.log(orderNumber); // Mostra o número do pedido no card
        setOrder(orderNumber);
        return orderNumber;
      });
  }, []);

  useEffect(() => {}, [order, table, client, orders]);

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
    newOrder(order, table, client, pedido, orders);
    sendOrder(order);
  };

  const newOrder = (order, table, client, pedido, orders) => {
    firebaseStore
      .collection("orders")
      .add({
        order: order,
        status: "Pedido em andamento",
        table: table,
        client: client,
        orders: orders,
      })
      .then((snapshot) => {
        setOrders([]);
        snapshot.forEach((doc) => {
          // console.log(doc.data()); // Lista de pedidos
          setOrders.push(doc.data())})
        console.log("Pedido enviado");
      })
      .catch((error) => {
        alert(error.message);
      });
    }


  return (
    <section id="orders" className="order-card">
      <h2 className="menu-title text-align">Detalhes do Pedido</h2>
      <div className="order-details">
        <p>Nº do pedido: {order}</p>
        <input
          id="table-number"
          type="number"
          name={table}
          className="order-details-input input"
          placeholder="Nº da mesa"
          required
          onChange={(e) => setTable(e.currentTarget.value)}
        ></input>
        <input
          id="client-name"
          type="text"
          className="order-details-input input"
          placeholder="Nome do cliente"
          value={client}
          onChange={(e) => setClient(e.currentTarget.value)}
        ></input>
      </div>
      <div className="menu-list text-align">
        <Menu
          className="menu-display"
          type={menu}
          items={menu === "breakfast" ? breakfast : allDay}
          
        />
        <div className="div-resume">
          { orders && props.newOrder.map((orderItem) => (
            <div className="order-item">
              {orderItem} <br />
              {/* Quantidade de itens */}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="value-total">
          <span className="total-price">TOTAL:R$ {total}</span>
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
          onClick={prevent}
        >
          Finalizar
        </button>
      </div>
    </section>
  );
};

export default OrderDetails;
