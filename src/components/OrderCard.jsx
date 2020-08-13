import firebase from "firebase";
import "../firebase";
import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import TrashCan from "./images/trash-can.png";
import "../App.css";
import "./OrderCard.css";

const OrderDetails = (props) => {
  const [breakfast /*, setBreakfast*/] = useState(true);
  const [allDay /*, setAllDay*/] = useState(false);
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState(1);
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
        // console.log(orderNumber);
        setOrder(orderNumber);
        return orderNumber;
      });
  }, []);

  useEffect(() => {}, [order, table, client, pedido]);

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
    console.log(props.newOrder);
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
        pedidos: props.newOrder,
      })
      .then((docs) => {
        console.log("Pedido enviado");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  function newRequest(orderItem) {
    const indexOrder = orders.findIndex(
      (order) => order.orderItem === orderItem.orderItem
    );
    if (indexOrder === -1) {
      setOrders([...orders, { ...orderItem, count: 1 }]);
    } else {
      orders[indexOrder].count++;
      setOrders([...orders]);
      console.log(orders);
    }
  }

  const deleteFunction = () => {
    const newOrder = props.newOrder;
    let itensPedido = newOrder.splice(newOrder.indexOf(newOrder.pedido), 1);
    setOrders(itensPedido);
    console.log("Itens sobrando", newOrder);
    console.log("Item removido", itensPedido);
  };

  const conta = props.newOrder.reduce((acumulador, itemAtual) => {
    return acumulador + itemAtual.price * Number(itemAtual.count);
  }, 0);
  console.log(conta);

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
          addItem={newRequest}
        />
        <div className="div-resume">
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
              {/* Quantidade de itens */}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="value-total">
          <span className="total-price">TOTAL:R$ {conta}</span>
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
