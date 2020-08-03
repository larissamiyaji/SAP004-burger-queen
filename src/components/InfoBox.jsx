import React from "react";
import "../App.css";

const InfoBox = (props) => {
  return (
    <div className="description">
      <h3>
        {props.titleKitchen} {props.titleBurgerQueen}
      </h3>
      <p>
        {props.kitchenText} {props.aboutBurgerQueen}
      </p>
      <h3>{props.titleHall}</h3>
      <p>{props.hallText}</p>
    </div>
  );
};
export default InfoBox;
