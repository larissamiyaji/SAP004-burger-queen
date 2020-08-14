import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
import BackgroundVideo from "../video/background-video-kitchen.mp4";
import "../../App.css";
import "./Kitchen.css";
//import Button from "../Button/Button";

const Kitchen = () => {
  const [open, setOpen] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("orders")
      .get()
      .then((snapshot) => {
        let arrayVazio = [];
        snapshot.forEach((doc) => {
          arrayVazio.push(doc.data());
        });
        setOpen(arrayVazio);
      });
  }, []);

  

  return (
    <div className="kitchen">
     {/*} <video
        src={BackgroundVideo}
        type="video/mp4"
        autoPlay
        loop
        muted
        className="video-background"
  ></video>*/}
      <div className="kitchen-display">
        <section className="order-list open-orders">
          <h2 className="list-title">Pedidos Abertos</h2>
          {open.map((element) => (
            <div className="open-card">
              <div className="order-top">
                <p>
                  <strong >Nº do pedido: </strong>
                  {element.order}
                </p>
                <p>
                  <strong>Nº da mesa: </strong>
                  {element.table}
                </p>
              </div>
              <p>
                <strong>Cliente: </strong>
                {element.client}
              </p>
              <p>
                <strong>Status: </strong>
                {element.status}
              </p><br></br>
              <p className='itens-box'>
                <strong className='itens' >Itens: </strong>
                {element.pedido}
              </p>
            </div>
          ))}
          
        </section>
      </div>
    </div>
  );
};

export default Kitchen;
