import firebase from "firebase";
import "../../firebase";
import React, { useState, useEffect } from "react";
import Menu from "../Menu/Menu";
import TrashCan from "../images/trash-can.png";
import "./OrderCard.css";

const OrderDetails = (props) => {
  const [breakfast] = useState(true);
  const [allDay] = useState(false);
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState("");
  const [table, setTable] = useState("");
  const [client, setClient] = useState("");
  const [menu] = useState("");
  const [pedido] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("orders")
      .get()
      .then((querySnapshot) => {
        const orderNumber = querySnapshot.size;
        setOrder(orderNumber);
        return orderNumber;
      });
  }, []);

  useEffect(() => {}, [order, table, client, orders, pedido]);

  const cancelOrder = (event) => {
    event.preventDefault();
  };
  const sendOrder = (order) => {
    const orderNumber = parseInt(order + 1);
    return setOrder(orderNumber);
  };

  const newOrder = (order, table, client, pedido) => {
    firebase
      .firestore()
      .collection("orders")
      .doc()
      .set({
        order: order,
        status: "Pedido em andamento",
        table: table,
        client: client,
        pedido: props.newOrder,
      })
      .then((docs) => {})
      .catch((error) => {
        alert(error.message);
      });
  };

  const deleteFunction = () => {
    const newOrder = props.newOrder;
    let itensPedido = newOrder.splice(newOrder.indexOf(newOrder.pedido), 1);
    setOrders(itensPedido);
  };

  const conta = props.newOrder.reduce((orders, orderItem) => {
    const deusmeajuda = Number(orderItem.split("R$")[1]);
    return orders + deusmeajuda;
  }, 0);

  const prevent = (event) => {
    event.preventDefault();
    newOrder(order, table, client);
    sendOrder(order);
  };

  return (
    <section id="orders" className="order-card">
      <h2 className="menu-title text-align">Detalhes do Pedido</h2>
      <div className="order-details">
        <p className="order-number">Nº do pedido: {order}</p>
        <input
          id="table-number"
          type="number"
          name={table}
          className="order-details-input"
          placeholder="Nº da mesa"
          required
          onChange={(e) => setTable(e.currentTarget.value)}
        ></input>
        <input
          id="client-name"
          type="text"
          className="order-details-input"
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
        <div classname="deleteItem" className="div-resume">
          {props.newOrder.map((orderItem) => (
            <div className="order-item">
              {orderItem}
              <button onClick={deleteFunction}>
                <img
                  src={TrashCan}
                  alt="Botão de deletar"
                  className="trash-can"
                ></img>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="value-total">
          <span className="total-price">TOTAL:R$ {conta},00</span>
        </div>
        <button
          type="submit"
          className="button-end cancel-button"
          onClick={cancelOrder}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="button-end send-order-button"
          onClick={prevent}
        >
          Finalizar
        </button>
      </div>
    </section>
  );
};

export default OrderDetails;
