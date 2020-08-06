import React, { useState, useEffect } from 'react';
import OrderCard from './OrderCard';
import Input from "./Input";
import Menu from './Menu';
import MenuCard from './MenuCard';
import Button from './Button';
import { firebaseStore } from '../firebase';
import firebase from "../firebase"



const Hall = () => {
  const [breakfast, setBreakfast] = useState(true);
  const [allday, setAllday] = useState(false);
  const [menuBreakfast, setMenuBreakfast] = useState([]);
  const [menuAllday, setMenuAllday] = useState([]);
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState(1);
  const [table, setTable] = useState("");
  const [client, setClient] = useState("");
  const [menu,setMenu] = useState("");
  const [total,setTotal] = useState("");
  

 
      
   
  
  const getMenu = ({name,state}) =>{
    firebase.firestore().collection("Menus").doc(name).get().then((docRef) =>{
      const itemData = docRef.data();
      state(() => itemData);
      console.log(itemData)
    }
    )
  };
  
   
  useEffect(() => {
    getMenu({ name: "breakfast", state: setBreakfast});
  }, []);

  const allDay = (e) => {
    setMenu(e.target.value);
    getMenu({name: "allday", state: setAllday})
  };

  const handleAddItem = (e) => {
    const item = e.currentTarget.parentElement.firstChild.innerText;
    const price = parseFloat(
      e.currentTarget.parentElement.children[1].innerText.replace("R$ ", "")
    );

    const itemIndex = order.findIndex((el) => el.item === item);
    if (itemIndex === -1) {
      setOrder([...order, { item, count: 1 }]);
    } else {
      const newOrder = [...order];
      newOrder[itemIndex].count += 1;
      setOrder(newOrder);
    }

    setTotal(total + price);
  };

  const sendOrders = (e) => {
    e.preventDefault();
    const sendOrder = {
      client:client,
      table:table,
      order:order, 
      status: 'pedido em andamento',
      ready: false 
    }
    firebaseStore().collection("orders").add(sendOrder);  
  }


  return (
    <main className="main-hall">
     
      <div >
        <div >
          <Button
            type="text"
            name="Breakfast"
            value="breakfast"
            onClick={(e) => setMenu(e.target.value)}
          />
          
          <div className="div-conteudo">
          <Menu
              type={menu}
              class='button-hall'
              items={menu === "breakfast" ? breakfast : allday}
             
            />

          </div>
          <Button
            type="text"
            name="allday"
            value="allday"
            onClick={allDay}
          /> 
          <div >
          </div>
        </div>
        <OrderCard newOrder={orders}/>
      </div>
    </main>
  );
};

export default Hall;
