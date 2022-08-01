import React from "react";
import { StoreItem } from "../data/storeitems";
import { Total } from "./Total";
import storeitems from "../data/storeitems";

type Props = {
  getCartItems: Function;
  total: number;
  increaseItems: Function;
  decreaseItems: Function;
};

export function Main({
  getCartItems,
  total,
  increaseItems,
  decreaseItems,
}: Props) {
  console.log(getCartItems());
  return (
    <main id="cart">
      <h2>Your Cart</h2>

      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          {getCartItems().map((item: any) => (
            <li>
              <img
                className="cart--item-icon"
                src={item.imgSrc}
                alt={item.name}
              />
              <p>{item.name}</p>
              <button
                className="quantity-btn remove-btn center"
                onClick={() => decreaseItems(item)}
              >
                -
              </button>
              <span className="quantity-text center">{item.inCart}</span>
              <button
                className="quantity-btn remove-btn center"
                onClick={() => increaseItems(item)}
              >
                +
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Total total={total} />
    </main>
  );
}
