import { createContext, useEffect, useState } from "react";
import { products } from "../assets";
import type { ShopContextType, productType, CartItemsType } from "../type";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

//createContext
export const ShopContext = createContext<ShopContextType | undefined>(undefined);

const ShopContextProvider: React.FC<{ children?: React.ReactNode }> = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  //define useState for searching
  const [search, setSearch] = useState<string>("");
  //define useState for show tag search
  const [showSearch, setShowSearch] = useState<boolean>(true);
  const [cartItems, setCartItems] = useState<CartItemsType>(() => {
    try {
      const stored = localStorage.getItem("cartItems");
      return stored ? JSON.parse(stored) : {};
    } catch (err) {
      return {};
    }
    
  });
  const navigate = useNavigate();
  // create function for event handlers addtocart
  const addToCart = async (itemId: string, size: string) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }
    // A deep copy of the cartItems
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);
    toast.success("success:product add to the cart");
  };

  const getCartCount = () => {
    let totalCount = 0;

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {}
      }
    }

    return totalCount;
  };

  const updateQuantity = async (itemId: string, size: string, quantity: number) => {
    let cartData = structuredClone(cartItems);

    if (!cartData[itemId]) cartData[itemId] = {};
    cartData[itemId][size] = quantity;

    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      const itemInfo = products.find((product: productType) => product._id === items);

      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0 && itemInfo) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {}
      }
    }

    return totalAmount;
  };
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
  };
useEffect(() => {
  try {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  } catch (err) {
    // ignore localStorage write errors (e.g., quota)
  }
}, [cartItems]);
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
