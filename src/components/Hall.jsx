import React, { useState, useEffect } from 'react';
import OrderCard from './OrderCard';
import Input from "./Input";
import Menu from './Menu';
import MenuCard from './MenuCard';
import Button from './Button';
import { firebaseStore } from '../firebase';



const Hall = () => {
  const [breakfast, setBreakfast] = useState(true);
  const [allday, setAllday] = useState(false);
  const [menuBreakfast, setMenuBreakfast] = useState([]);
  const [menuAllday, setMenuAllday] = useState([]);
  const [orders, setOrders] = useState([]);
  

  const menu = () => {
    firebaseStore().collection("menu").get().then((snapshot) => {
  snapshot.docs.forEach((doc) => {
        console.log("Collection breakfast", doc.data());
        const menuArray = Object.values(doc.data())
        console.log(menuArray)
      });
      
    })}; 
  
   
  useEffect(() => {
    console.log(menuBreakfast);
    console.log(menuAllday);
    console.log(menuArray)
  }, [menuBreakfast, menuAllday]);


  const createMenuBreakfast= () => {
    firebaseStore
      .collection('menu')
      .where('menu', '==', 'breakfast')
      .get()
      .then((querySnapshot) => {
        const newArray = querySnapshot.docs.map((doc) => doc.data());
        setMenuBreakfast(newArray);
      });
  };

  const createMenuAllday = () => {
    firebaseStore
      .collection('menu')
      .where('menu', '==', 'allday')
      .get()
      .then((querySnapshot) => {
        const newArray = querySnapshot.docs.map((doc) => doc.data());
        setMenuAllday(newArray);
      });
  };

  const [menuArray, setMenu] = useState([menu]);
 
  const callBreakfast = () => {
    setBreakfast(!breakfast);
    setAllday(!allday);
    createMenuBreakfast();
  };

  const callAllday = () => {
    setAllday(!allday);
    setBreakfast(!breakfast);
    createMenuAllday();
    
  };

  const setOrder = (e) => {
    e.preventDefault();
    let arrayItem = {
      nameItem: e.currentTarget.name,
      priceItem: e.currentTarget.value,
    };
    setOrder([...orders, arrayItem]);
  }

  return (
    <main className="main-hall">
     
      <div className="div-hall">
        <div className="tabs-container">
          <Button
            type="radio"
            name="menu"
            className="tabs"
            id="tab1"
            value="cafe"
            checked={breakfast === true}
            onClick={() => callBreakfast()}
          />
          <label>
            Breakfast
          </label>
          <div className="div-conteudo">
            {menuBreakfast.map((element) => (
              <MenuCard
                key={element.item + element.price}
                idCard={element.item}
                name={element.price}
                item_name={element.item}
                price={element.price}
                handleclick={setOrder}
              />
            ))}
          </div>
          <Button
            type="radio"
            name="menu"
            className="tabs"
            id="tab2"
            value="tarde"
            checked={allday === true}
            onClick={() => callAllday()}
          />
          <label>
            All Day
          </label>
          <div >
            {menuAllday.map((element) => (
              <MenuCard
                key={element.item + element.price}
                idCard={element.item}
                price={element.price}
                name={element.item}
                price={element.price}
                handleclick={setOrder}
              />
            ))}
          </div>
        </div>
        <OrderCard newOrder={orders}/>
      </div>
    </main>
  );
};

export default Hall;
