// import { firebaseStore } from "../firebase";
import firebase from "firebase";
import "../firebase";
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
  const [pedido, setPedido] = useState([]);
  
  
  // console.log(pedido);

  useEffect(() => {
    firebase
      .firestore()
      .collection("orders")
      .get()
      .then((querySnapshot) => {
        const orderNumber = querySnapshot.size;
        // console.log(orderNumber);
        setOrder(orderNumber);
        return orderNumber;
      });
  }, []);

  useEffect(() => {}, [order, table, client, orders,pedido]);

  const cancelOrder = (event) => {
    event.preventDefault();
    console.log("Cancelando pedido");
  };
  const sendOrder = (order) => {
    const orderNumber = parseInt(order + 1);
    return setOrder(orderNumber);
  };


  const newOrder = (order, table, client,pedido) => {
    firebase
      .firestore()
      .collection("orders")
      .doc()
      .set({
        order: order,
        status: "Pedido em andamento",
        table: table,
        client: client,
        pedido:props.newOrder
      })
      .then((docs) => {
        alert("Pedido enviado");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  function newRequest(orderItem) {
    const indexOrder = props.newOrder.findIndex(
      (order) => props.newOrder.orderItem === orderItem.orderItem
    );
    if (indexOrder === -1) {
      setOrders([...orders, { ...orderItem, count: 1 }]);
    } else {
      orders[indexOrder].count++;
      setOrders([...orders]);
      console.log(orders);
    }
  }
  
  const prevent = (event) => {
    event.preventDefault();
     newOrder(order,table,client) 
    sendOrder(order)
   // console.log(props.newOrder)
  };
  const deleteItem = (orderItem) => {
    const remove = props.newOrder.filter((el) => el.item !== orderItem.item);

    setOrders([remove]);
    console.log(remove);
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
          {props.newOrder.map((orderItem) => (
            <div className="order-item">
              {orderItem}
              <button onClick={(remove) => deleteItem(orderItem)}>X</button>
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
