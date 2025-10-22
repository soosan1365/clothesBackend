import React, { useContext } from "react";
import { ShopContext } from "../context";

import type { ShopContextType } from "../type";

const CartTotal: React.FC = () => {
  const shop = useContext(ShopContext) as ShopContextType | undefined;
  if (!shop) return null;
  const { currency, delivery_fee, getCartAmount } = shop;
  return (
    <div className="w-full gab">
      <div className="text-2xl ">
        <p
          className="  
       text-[1rem] font-semibold pl-2 carttotal border text-gray-800"
        >
          CART<span className="ml-3 ">TOTAL</span>
        </p>
      </div>
      <div className="flex Subtotal flex-col gap-2 mt-2 px-7 border-2
      text-gray-800 rounded-md text-[18px]">
        <div className="flex justify-between">
          <p> Subtotal</p>
          <p>
            {currency}
            {getCartAmount()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shapping fee</p>
          <p>
            {currency}
            {delivery_fee}
          </p>
        </div>
        <hr className="bg-black" />
        <div className="flex justify-between ">
          <b>total</b>
          <b>
            {currency}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
