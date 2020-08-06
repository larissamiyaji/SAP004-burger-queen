import React from "react";
// import firebase from "../firebase";
import "../App.css";
import MenuItem from "./MenuItem";



const Menu = (props) => {
  return (
    <> 
      {Object.entries(props.items).map((item) => {
        return (
          <MenuItem 
            key={item[0]}
            name={item[0]}        
            price={item[1]}
            handleClick={props.addItem}
            handleRemoveItem={props.removeItem}
            handleSubtractItem={props.subtractItem}
            order={props.order}
          />
        );
      })}
    </>
  );
};

export default Menu;