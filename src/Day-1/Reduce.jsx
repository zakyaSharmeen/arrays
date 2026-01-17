import React from "react";

function Reduce() {
  // reduce- combine the array into single value
  //calculate total
  const prices = [100, 200, 300];

  // const totalPrice = prices.reduce((sum, cp) =>{
  //   return sum + cp;

  // },0)

  const totalPrice = prices.reduce((sum, cp) =>
     sum + cp, 0);

  return (
    <div>
      <h1>Reduce method</h1>
      <h2>Total Price: {totalPrice}</h2>
    </div>
  );
}

export default Reduce;
