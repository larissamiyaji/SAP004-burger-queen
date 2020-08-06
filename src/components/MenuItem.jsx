import React from "react";
import "../App.css";


const MenuItem = (props) => {
  return (
    <div className='card'>
      <div className='container-menu'>
       <button> <h5>
          <b className='item-name'>{props.name}</b>
        </h5></button>
        <p>R$ {props.price.toFixed(2)}</p>

        <button
          className='btn-item'
          onClick={(e) => {
            e.preventDefault();
            props.handleClick(e);
          }}
          id='add'
        >
          
        </button>

        <button
          className='btn-item'
          onClick={(e) => {
            e.preventDefault();
            props.handleSubtractItem(e);
          }}
          id='sub'
        >
        
        </button>

        <button
          className='btn-item'
          onClick={(e) => {
            e.preventDefault();
            props.handleRemoveItem(e);
          }}
          id='rem'
        >
          
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
