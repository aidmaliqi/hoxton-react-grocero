
import { StoreItem } from "../data/storeitems";

type Props = {
  storeitems: StoreItem[];
  addToCart: Function;
  totalPrice: Function;
};

export function Header({ storeitems, addToCart, totalPrice }: Props) {
  return (
    <header id="store">
      <h1>Grocero</h1>
      <ul className="item-list store--item-list">
        {storeitems.map((item, index) => (
          <li key={index}>
            <div className="store--item-icon">
              <img alt={item.name} src={item.imgSrc} />
            </div>
            <button
              onClick={() => {
                addToCart(item);
                totalPrice(item);
              }}
            >
              Add To Cart
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
