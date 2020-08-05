import React from "react";
import firebase from "../firebase";
import BackgroundVideo from "./video/background-video-kitchen.mp4";
import "../App.css";
import "./Kitchen.css";
import Button from "./Button";

const Kitchen = () => {
  const showOrders = () => {
    firebase
      .firestore()
      .collection("orders")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          console.log("Lista de pedidos", doc.data());
        });
      });
    }
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
            <Button onClick={showOrders} name="Mostrar Pedidos"></Button> {/*Tirar essa função do botão*/}
        <div className="kitchen-display">
          <section className="order-list open-orders">
            <h2 className="list-title">Pedidos Abertos</h2>
            <div className="list">LISTA DE PEDIDOS EM ABERTO</div>
          </section>
          <section className="order-list closed-orders">
            <h2 className="list-title">Pedidos Concluidos</h2>
            <div className="list">LISTA DE PEDIDOS CONCLUIDOS</div>
          </section>
        </div>
      </div>
    );
}

export default Kitchen;
