import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import storeitemsData, { StoreItem } from "../data/storeitems";
import { Header } from "../components/Header";
import { Main } from "../components/Main";

/*const addToCart = (storeitemsCopy: StoreItem[]) => {
  storeitemsCopy.filter((item) => item.inCart > 0);
};

console.log(addToCart);*/

function App() {
  const [storeitems, setStoreitems] = useState(storeitemsData);
  const [total, setTotal] = useState(0);

  function addToCart(item: StoreItem) {
    const storeitemsCopy = structuredClone(storeitems);

    const matchItem = storeitemsCopy.find(
      (target: StoreItem) => target.id === item.id
    );
    matchItem.inCart + 1;

    setStoreitems(storeitemsCopy);
  }

  function displayCart(item: StoreItem, index: number) {
    if (item.inCart > 0) {
      return (
        <li key={index}>
          <img className="cart--item-icon" src={item.imgSrc} alt={item.name} />
          <p>{item.name}</p>
          <button className="quantity-btn remove-btn center">-</button>
          <span className="quantity-text center">{item.inCart}</span>
          <button className="quantity-btn remove-btn center">+</button>
        </li>
      );
    }
  }

  function totalPrice(item: StoreItem) {
    let tot = item.inCart * item.price;
    /*storeitems.map((item) =>
      item.inCart > 0 ? (tot = item.inCart * item.price) : tot
    );*/
    setTotal(tot);
  }

  return (
    <>
      <Header
        storeitems={storeitems}
        addToCart={addToCart}
        totalPrice={totalPrice}
      />

      <Main storeitems={storeitems} displayCart={displayCart} total={total} />
    </>
  );
}

export default App;
