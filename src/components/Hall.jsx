import React, { useState, useEffect } from "react";
import OrderCard from "./OrderCard";
import OrderModal from "./OrderModal";
import Input from "./Input";
import Menu from "./Menu";

import Button from "./Button";
import { firebaseStore } from "../firebase";
import firebase from "../firebase";

const Hall = () => {
  const [breakfast, setBreakfast] = useState(true);
  const [allday, setAllday] = useState(false);
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState(1);
  const [table, setTable] = useState("");
  const [client, setClient] = useState("");
  const [menu, setMenu] = useState("");
 

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
      status: "pedido em andamento",
      ready: false,
    };
    firebaseStore().collection("orders").add(sendOrder);
  };

  return (
    <main>
      <div>
        <div>
          <Button
            class="ButtonItem"
            type="text"
            name="Breakfast"
            value="breakfast"
            onClick={(e) => setMenu(e.target.value)}
          />

          <div>
            <Menu
              type={menu}
              items={menu === "breakfast" ? breakfast : allday}
            />
          </div>
          <Button
            class="ButtonItem"
            type="text"
            name="allday"
            value="allday"
            onClick={allDay}
          />
        </div>
        <OrderCard newOrder={orders} />
      </div>
    </main>
  );
};

export default Hall;
