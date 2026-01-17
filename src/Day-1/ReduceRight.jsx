import React from 'react'

function ReduceRight() {
  //reduceright = same as reduce but 
  // starts from right side


    const letters = ["R", "E", "A", "C", "T"];

    const words= letters.reduceRight((acc, curr) =>
       acc+ curr,"")
  return (
    <div>
      <h1>Reduce Right Method</h1>
      <h2>Words: {words}</h2>
    </div>
  )
}

export default ReduceRight