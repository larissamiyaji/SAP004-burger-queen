import React from "react";
import "./MenuItem.css";

const MenuItem = (props) => {
  return (
    <div
      className="card"
      onClick={(e) => {
        e.preventDefault();
        props.handleClick(e);
      }}
    >
      <div className="menu-item">
        <div className="menu-button">
          <div className="menu-font">
            <strong>{props.name}</strong>
          </div>
          <p className="menu-font-price">
            <strong>R$ {props.price.toFixed(2)}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
