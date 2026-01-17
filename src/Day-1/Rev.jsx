import React from "react";

function Rev() {
  const numbers = [1, 2, 3, 4, 5];

  //1-map-tranform each elemnt of array and
  // render list and
  // return new array
  const simpleRenderNumbers = numbers
    .map((i, num) =>
     <li key={i}>{num}</li>);
  ////////////////////////////////////////////////////

  const multipliedNumbers = numbers.map((num) => num * 2);
  const mappedNumbered = multipliedNumbers.map((num, i) =>
     (
    <li key={i}>{num}</li>
  ));

  return (
    <div>
      <ul>
        <h1>simply rendered Numbers:</h1>

        {simpleRenderNumbers}
        <h1>multiplied numbers</h1>
        {mappedNumbered}
      </ul>
    </div>
  );
}

export default Rev;
