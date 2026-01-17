
function ForEach() {
  // foreach-iterate over array and used in side effects
  // const numbers = [1, 2, 3, 4, 5];

  // useEffect(() => {
  //   numbers.forEach((num) => {
  //     console.log(num);
  //   });
  // });
const products = [
  { name: "Pen", price: 10 },
  { name: "Book", price: 50 }
];
products.forEach((product) => {
  product.price = product.price + product.price * 10; // adding 10% tax
});
console.log(products);


  return <div>ForEach</div>;
}

export default ForEach;
