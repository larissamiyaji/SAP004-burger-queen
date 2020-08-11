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
  
  const [order, setOrder] = useState(1);
  const [table, setTable] = useState("");
  const [client, setClient] = useState("");
  const [menu, setMenu] = useState("");
  const [resume, setResume] = useState("");
  const [total, setTotal] = useState(0);
  const [pedido,setPedido]= useState("");
  console.log(pedido)

  firebase
    .firestore()
    .collection("orders")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        
      });
    });

  useEffect(() => {}, [order, table, client,pedido]);

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
    newOrder(order, table, client,pedido);
    sendOrder(order);
  };

  
 

  const newOrder = (order, table, client,pedido) => {
    firebaseStore
      .collection("orders")
      .add({
        order: order,
        status: "pedido em andamento",
        table: table,
        client: client, 
        pedido:pedido
        
      })
      .then((docs) => {
        setPedido([]);
        alert("Pedido enviado");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  
  
  
  
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
          <div>
            {props.newOrder.map((orderItem) => (
                <div>
                  <div
                     id="orders"
                    value={orderItem}
                    onChange={(e) => setPedido(e.currentTarget.value)}
                  >
                    {orderItem}
                  </div>
                </div>
              ))}
              <div>
        {pedido &&
          pedido.map((orderItem) => (
            <div>
              <li>
                {pedido}
              </li>
             
            </div>
          ))}

       
      </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div
            onClick={(e) => setTotal(e.target.value)}
            className="value-total"
          >
            <span className="total-price">TOTAL:R$ {total}</span>
          </div>
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
