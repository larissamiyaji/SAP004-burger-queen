import React from "react";
import "../App.css";

const InfoBox = () => {
  return (
    <div className="infobox">
      <section className="description">
        <div className="burger-queen-description">
          <h3>Sobre Burger Queen</h3>
          <p>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século XVI
          </p>
        </div>
        {/* <div className="kitchen-hall">
          <h3>Cozinha</h3>
          <p>
            Para ser direcionado para a página da Cozinha, selecione cozinha nas
            opções acima.
          </p>
          <h3>Salão</h3>
          <p>
            Para ser direcionado para a página do Salão, selecione salão nas
            opções acima.
          </p>
        </div> */}
      </section>
    </div>
  );
};
export default InfoBox;
