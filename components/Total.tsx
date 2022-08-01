import React from "react";

type Prop = {
  total: number;
};
export function Total({ total }: Prop) {
  return (
    <div className="total-section">
      <div>
        <h3>Total</h3>
      </div>

      <div>
        <span className="total-number">{total.toFixed(2)}</span>
      </div>
    </div>
  );
}
