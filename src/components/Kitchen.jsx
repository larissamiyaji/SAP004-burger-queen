import React, { Component } from "react";
import "../App.css";
import "./Kitchen.css";
import BackgroundVideo from "./video/background-video.mp4";

class Kitchen extends Component {
  render() {
    return (
      <div className="kitchen">
        <video
          src={BackgroundVideo}
          type="video/mp4"
          autoPlay
          loop
          className="video-background"
        ></video>
        <h1 className="list-title">Cozinha</h1>
        <div className="kitchen-display">
          <section className="order-list open-orders">
            <h2 className="list-title">Pedidos Abertos</h2>
            <div>LISTA DE PEDIDOS EM ABERTO</div>
          </section>
          <section className="order-list closed-orders">
            <h2 className="list-title">Pedidos Concluidos</h2>
            <div>LISTA DE PEDIDOS CONCLUIDOS</div>
          </section>
        </div>
      </div>
    );
  }
}

export default Kitchen;
