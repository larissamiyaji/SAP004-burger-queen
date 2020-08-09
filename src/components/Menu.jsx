import React from "react";
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
            order={props.order}
          />
        );
      })}
    </>
  );
};

export default Menu;

