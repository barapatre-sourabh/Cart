import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import React, { useState } from "react";
import Footer from "./components/Footer.js";
import AddItem from "./components/AddItem.js";
function App() {
  var productList = [
    {
      price: 9999,
      name: "smsung js19",
      quantity: 0,
    },
    {
      price: 5999,
      name: "Redmi 6",
      quantity: 0,
    },
    {
      price: 99999,
      name: " OPPO ren",
      quantity: 0,
    },
    {
      price: 8999,
      name: "Motorola 550",
      quantity: 0,
    },
  ];

  var [productList, setProductList] = useState(productList);
  let [totalAmount, setTotalAmount] = useState(0);
  const incrementQuantity = (index) => {
    let newProductLIst = [...productList];
    let newTotalAmount = totalAmount;
    newProductLIst[index].quantity++;
    newTotalAmount += newProductLIst[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductLIst);
  };

  const decrementQuantity = (index) => {
    let newProductLIst = [...productList];
    let newTotalAmount = totalAmount;
   if( newProductLIst[index].quantity > 0)
      { newProductLIst[index].quantity--
        newTotalAmount -= newProductLIst[index].price;
      }
      setTotalAmount(newTotalAmount);
    setProductList(newProductLIst);
  };

  const resetQuantity = ()=>{
    let newProductLIst = [...productList];
   newProductLIst.map((productList)=>{
    productList.quantity = 0 
  })
   setProductList(newProductLIst);
   setTotalAmount(0);
}
const removeItem=(index)=>{
  let newProductLIst = [...productList];
  let newTotalAmount = totalAmount;
  newTotalAmount = newProductLIst[index].quantity*newProductLIst[index].price;
  newProductLIst.splice(index,1);
  setProductList(newProductLIst);
  setTotalAmount(newTotalAmount);
};


const addItem=(name,price)=>{
  let newProductLIst = [...productList];
  newProductLIst.push({
    price:price,
    name:name,
    quantity:0
  });
  setProductList(newProductLIst);
};
  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem={addItem}/>
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem = {removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
    </>
  );
}

export default App;
