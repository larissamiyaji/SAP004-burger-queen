import React, { useState, useEffect } from "react";

const OrderNumber = () => {
  const [number, setNumber] = useState(1);

  useEffect(() => {}, []);

  return (
    <div>
      <h1>TESTE DE CONTADOR</h1>
      <button onClick={() => setNumber(number + 1)}>Aumenta 1</button>
      <h1>{number}</h1>
    </div>
  );
};

export default OrderNumber;
