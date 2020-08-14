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
  const [menu, setMenu] = useState("");

  const getMenu = ({ name, state }) => {
    firebase
      .firestore()
      .collection("Menus")
      .doc(name)
      .get()
      .then((docRef) => {
        const itemData = docRef.data();
        state(() => itemData);
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
        <div className="card-position">
          <OrderCard newOrder={orders} />
          <section>
            <div className="done-card">
              <h2 className="list-title">Para Entregar:</h2>

              <div className="open-card">
                <div className="order-top">
                  <p>
                    <strong>Nº do pedido: 1 </strong>
                  </p>
                  <p>
                    <strong>Nº da mesa:1 </strong>
                  </p>
                </div>
                <p>
                  <strong>Cliente: Darth Verde </strong>
                </p>
                <p>
                  <strong>Status:Pedido Pronto </strong>
                </p>

                <p>
                  <strong>Itens: Misto Quente,Café Americano </strong>
                </p>
                <p>
                  <strong className="itens">Total: R$ 15,00 </strong>
                </p>

                <button type="submit" className="done-button-hall">
                  {" "}
                  Entregar Pedido
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Hall;
