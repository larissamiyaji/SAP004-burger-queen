import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import BackgroundVideo from "./video/background-video-kitchen.mp4";
import "../App.css";
import "./Kitchen.css";

const Kitchen = () => {
  const [open, setOpen] = useState([]);
  // const [closed, setClosed] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("orders")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const orderList = Object.entries(doc.data()); //  Array dos pedidos
          setOpen([
            orderList[0],
            orderList[1],
            orderList[2],
            orderList[3],
          ]);
          // setClosed(orderList);
          console.log("ID do pedido", doc.id);
          console.log(orderList);
        });
      });
  }, []);
  return (
    <div className="kitchen">
      <video
        src={BackgroundVideo}
        type="video/mp4"
        autoPlay
        loop
        muted
        className="video-background"
      ></video>
      <h1 className="list-title">Cozinha</h1>
      <div className="kitchen-display">
        <section className="order-list open-orders">
          <h2 className="list-title">Pedidos Abertos</h2>
          {/* <div className="list open-orders"></div> POSSIVELMENTE PODE APAGAR */}
          {open}
        </section>
        <section className="order-list closed-orders">
          <h2 className="list-title">Pedidos Concluidos</h2>
          {/* <div className="list closed-orders"></div> POSSIVELMENTE PODE APAGAR */}
          {/* {closed} */}
        </section>
      </div>
    </div>
  );
};

export default Kitchen;

// const showOrders = () => {
//     firebase
//       .firestore()
//       .collection("orders")
//       .get()
//       .then((snapshot) => {
//           snapshot.forEach((doc) => {
//               const orderList = Object.entries(doc.data());
//               setOpen(orderList);
//               setClosed(orderList);
//               // console.log(orderList)
//             });
//           });
//         // console.log(open)
//         // console.log(closed)
//       };

//       const showOrders = () => {
//           firebase
//             .firestore()
//             .collection("orders")
//             .get()
//           .then((snapshot) => {
//               snapshot.docs.forEach((doc) => {
//                   console.log("Lista de pedidos", doc.data());
//                 });
//               });
//           };
