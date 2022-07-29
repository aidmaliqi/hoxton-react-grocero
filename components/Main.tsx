import React from "react";
import { StoreItem } from "../data/storeitems";
import { Total } from "./Total";
type Props = {
  storeitems: StoreItem[];
  displayCart: Function;
  total: number;
};
export function Main({ storeitems, displayCart, total }: Props) {
  return (
    <main id="cart">
      <h2>Your Cart</h2>

      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          {storeitems.map((item, index) => displayCart(item, index))}
        </ul>
      </div>

      <Total total={total} />
    </main>
  );
}
