import React from "react";
import "../App.css";

const MenuItem = (props) => {
  return (
    <div className="card">
      <div className="menu-item">
        <div className="menu-button">
        <button className="input">
          {" "}
          <h5>
            <b>{props.name}</b>
          </h5>
        </button>
        <p>R$ {props.price.toFixed(2)}</p>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            props.handleClick(e);
          }}
          id="add"
        ></button>

      </div>
    </div>
  );
};

export default MenuItem;
