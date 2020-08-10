import { firebaseStore } from "../firebase";
import firebase from "../firebase";
import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Button from "./Button";
import "../App.css";
import Hall from "./Hall";

const OrderDetails = (props) => {
  const [breakfast, setBreakfast] = useState(true);
  const [allDay, setAllDay] = useState(false);
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState(1);
  const [table, setTable] = useState("");
  const [client, setClient] = useState("");
  const [menu, setMenu] = useState("");
  const [resume, setResume] = useState("");
  const [total, setTotal] = useState(0);

  firebase
    .firestore()
    .collection("orders")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {});
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
  const handleAddItem = (e) => {
    const item = e.currentTarget.parentElement.firstChild.innerText;
    const price = parseFloat(
      e.currentTarget.parentElement.children[1].innerText.replace("R$ ", "")
    );

    const itemIndex = order.findIndex((el) => el.item === item);

    if (itemIndex === -1) {
      setOrder([...order, { item, count: 1 }]);
    } else {
      const newOrder = [...order];
      newOrder[itemIndex].count += 1;
      setOrder(newOrder);
    }

    setTotal(total + price);
    console.log(handleAddItem);
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
          addItem={handleAddItem}
        />
        <div className="div-resume">
          <Button
            name="RESUMO"
            type="text"
            value={resume}
            onClick={(e) => setResume(e.target.value)}
          />
          <div>
            {props.newOrder.map((orderItem) => (
              <div>
                Item: {orderItem} <br />
                Qtde: {orderItem} {/* Quantidade de itens */}
              </div>
            ))}
          </div>
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
