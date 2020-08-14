import React, { useState, useEffect } from "react";
import OrderCard from "../OrderCard/OrderCard";
import Menu from "../Menu/Menu";
import Button from "../Button/Button";
import firebase from "../../firebase";
import BackgroundVideo from ".././video/background-video-hall.mp4";
import "./Hall.css";

const Hall = () => {
  const [breakfast, setBreakfast] = useState(true);
  const [allday, setAllday] = useState(false);
  const [orders, setOrders] = useState([]);
  // const [order, setOrder] = useState(1);
  // const [table, setTable] = useState("");
  // const [client, setClient] = useState("");
  const [menu, setMenu] = useState("");
  // const [resume, setResume] = useState("");
  const [total, setTotal] = useState(0);

  const getMenu = ({ name, state }) => {
    firebase
      .firestore()
      .collection("Menus")
      .doc(name)
      .get()
      .then((docRef) => {
        const itemData = docRef.data();
        state(() => itemData);
        // console.log(itemData);
      });
  };

  useEffect(() => {
    getMenu({ name: "breakfast", state: setBreakfast });
  }, []);

  const allDay = (e) => {
    setMenu(e.target.value);
    getMenu({ name: "allday", state: setAllday });
  };

  const addItem = (item) => {
    setOrders([...orders, item]);
    console.log(orders);
  };

  
   // console.log(orders);
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
              id="pedido"
              addItem={addItem}
            />
          </div>
        </div>
        <OrderCard newOrder={orders} />
      </div>
    </main>
  );
};

export default Hall;