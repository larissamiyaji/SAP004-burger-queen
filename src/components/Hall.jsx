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
      }).then((querySnapshot) => {
        const newArray = querySnapshot.itemData.map((itemData) => itemData.data());
        getMenu(newArray);
      });
  };

  useEffect(() => {
    getMenu({ name: "breakfast", state: setBreakfast });
  }, []);

  const allDay = (e) => {
    setMenu(e.target.value);
    getMenu({ name: "allday", state: setAllday });
  };

  const OrderRequest = (e) => {
    e.preventDefault();
    let arrayItem = {
      nameItem: e.currentTarget.id,
      priceItem: parseInt(e.currentTarget.value),
      quantidade: parseInt(1),
    };
    setOrders([...orders, arrayItem]);
    
  };

  const sendOrders = (e) => {
    e.preventDefault();
    const sendOrder = {
      client: client,
      table: table,
      order: order,
      status: "pedido em andamento",
      ready: false,
    };
    firebaseStore().collection("orders").add(sendOrder);
  };



  return (
    <main className="main-hall">
     <video
        src={BackgroundVideo}
        type="video/mp4"
        autoPlay
        loop
        muted
        className="video-background"
      ></video>
      <div className="div-hall">
        <div className="tabs-container">
          <Button className="ButtonItem" type="text" name="Breakfast" value="breakfast" onClick={(e) => setMenu(e.target.value)} />
          <Button className="ButtonItem" type="text" name="Allday" value="allday" onClick={allDay} />
          <div>
            <Menu className="menu-display"  type={menu} items={menu === "breakfast" ? breakfast : allday}  />
            <div className="div-conteudo">
            {orders.map((element) => (
              <Button
                key={element.item}
                idCard={element.item}
                name={element.item}
                value={element.priceItem}
                price={element.price}
               
                handleclick={OrderRequest}
              />
            ))}
          </div>
           
          </div>
        </div>
        <OrderCard newOrder={orders} />
      </div>
    </main>
  );
};

export default Hall;
