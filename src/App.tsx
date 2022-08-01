import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import storeitemsData, { StoreItem } from "../data/storeitems";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import storeitems from "../data/storeitems";

function App() {
  const [storeitems, setStoreitems] = useState(storeitemsData);
  const [total, setTotal] = useState(0);

  function increaseItems(item: StoreItem) {
    const storeitemsCopy = structuredClone(storeitems);

    const matchItem = storeitemsCopy.find(
      (target: StoreItem) => target.id === item.id
    );
    matchItem.inCart++;

    setStoreitems(storeitemsCopy);
    setTotal(total + item.price);
  }

  function decreaseItems(item: StoreItem) {
    const storeitemsCopy = structuredClone(storeitems);

    const matchItem = storeitemsCopy.find(
      (target: StoreItem) => target.id === item.id
    );
    matchItem.inCart--;

    setStoreitems(storeitemsCopy);
    setTotal(total - item.price);
  }

  function getCartItems() {
    return storeitems.filter((item) => item.inCart > 0);
  }
  function addToCart(item: StoreItem) {
    const storeitemsCopy = structuredClone(storeitems);

    const matchItem = storeitemsCopy.find(
      (target: StoreItem) => target.id === item.id
    );
    matchItem.inCart++;

    setStoreitems(storeitemsCopy);
  }

  function totalPrice(item: StoreItem) {
    let tot = structuredClone(total);
    tot += item.price;

    setTotal(tot);
  }
  /*function displayCart(item: StoreItem, index: StoreItem) {
    return (
      <li key={index.id}>
        <img className="cart--item-icon" src={item.imgSrc} alt={item.name} />
        <p>{item.name}</p>
        <button className="quantity-btn remove-btn center">-</button>
        <span className="quantity-text center">{item.inCart}</span>
        <button className="quantity-btn remove-btn center">+</button>
      </li>
    );
  }*/
  return (
    <>
      <Header
        storeitems={storeitems}
        addToCart={addToCart}
        totalPrice={totalPrice}
      />

      <Main
        getCartItems={getCartItems}
        total={total}
        increaseItems={increaseItems}
        decreaseItems={decreaseItems}
      />
    </>
  );
}

export default App;
