import React from "react";
import MenuItem from "./MenuItem";




const Menu = (props) => {
  return (
    <div > 
      {Object.entries(props.items).map((item) => {
        return (
          <MenuItem 
            key={item[0]}
            name={item[0]}        
            price={item[1]}
            handleClick={() => props.addItem(item[0] + " R$" + item[1])}
            order={props.order}
            
          />
        );
      })}
    </div>
  );
};
export default Menu;
