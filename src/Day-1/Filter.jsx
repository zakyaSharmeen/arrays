import React from 'react'

function Filter() {
    //filter- selct the only element which passes tht test
    // array length can be reduced
    // cant render object/array directly

      const prices = [100, 200, 300];
      const filteredPrices = prices.filter((price) => price > 150);


  return (
    <div>
        <h1>Filter method</h1>
        {
            filteredPrices.map((price)=>(
               <ul>
                 <li>{price}</li>
               </ul>
            ))
        }

    </div>
  )
}

export default Filter