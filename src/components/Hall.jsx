import React, { useState, useEffect } from "react";
import OrderCard from "./OrderCard";

import Menu from "./Menu";
// import MenuCard from "./MenuCard";
import Button from "./Button";
import { firebaseStore } from "../firebase";
import firebase from "../firebase";
import BackgroundVideo from "./video/background-video-hall.mp4";
import "./Hall.css";
import OrderModal from "./OrderModal";
// import Input from "./Input";

const Hall = () => {
  const [breakfast, setBreakfast] = useState(true);
  const [allday, setAllday] = useState(false);
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState(1);
  const [table, setTable] = useState("");
  const [client, setClient] = useState("");
  const [menu, setMenu] = useState("");
  const [resume, setResume] = useState("");
  const [total, setTotal] = useState(0);
  const [pedido,setPedido]= useState("");
  

  const MenuCard = () => {
    const turbinar = (event) => {
      event.preventDefault();
      console.log("Abrindo modal");
      OrderModal.hidden = false;
      window.location.href = "/hall#order-modal";
    };
  };

  const getMenu = ({ name, state }) => {
    firebase
      .firestore()
      .collection("Menus")
      .doc(name)
      .get()
      .then((docRef) => {
        const itemData = docRef.data();
        state(() => itemData);
        console.log(itemData);
      });
  };

  useEffect(() => {
    getMenu({ name: "breakfast", state: setBreakfast });
  }, []);

  const allDay = (e) => {
    setMenu(e.target.value);
    getMenu({ name: "allday", state: setAllday });
  };

  const sendOrders = (e) => {
    e.preventDefault();
    const sendOrder = {
      client: client,
      table: table,
      order: order,
      pedido:pedido,
      status: "pedido em andamento",
      
    };
    firebaseStore().collection("orders").add(sendOrder);
  };

  const addItem = (item) => {
    setOrders([...orders, item])
    const handleAddItem = (e) => {
      const item = e.currentTarget.parentElement.firstChild;
      const price = parseFloat(
        e.currentTarget.parentElement.children[1]
        
      );
  
      const itemIndex = order.findIndex((el) => el.item === item);
      if (itemIndex === -1) {
        setOrder([...order, { item, count: 1 }]);
      } else {
        const RequestOrder = [...order];
        RequestOrder[itemIndex].item += 1;
        setOrders(RequestOrder);
      }
  
      setTotal(total + price);
      
    }; 
   
  }
  


 


  return (
    <main className="main-hall">
     {/* <video
        src={BackgroundVideo}
        type="video/mp4"
        autoPlay
        loop
        muted
        className="video-background"
     ></video>*/}
      <div className="div-hall">
        <div className="tabs-container">
          <Button
            className="ButtonItem"
            type="text"
            name="Breakfast"
            value="breakfast"
            onClick={(e) => setMenu(e.target.value)}
          />
          <Button
            className="ButtonItem"
            type="text"
            name="Allday"
            value="allday"
            onClick={allDay}
          />
          <div>
            <Menu
              className="menu-display"
              type={menu}
              items={menu === "breakfast" ? breakfast : allday}
              id='pedido'
              addItem={addItem}
              value={pedido}
              onChange={(e) => setPedido(e.currentTarget.value)}
               />
            <div className="div-conteudo"
             onClick={(e) => setTotal(e.target.value)}> total:{total}</div>
          </div>
        </div>
        <OrderCard newOrder={orders} />
      </div>
    </main>
  );
};

export default Hall;
