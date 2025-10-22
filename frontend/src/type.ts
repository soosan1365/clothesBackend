import type { Dispatch, SetStateAction } from "react";
import type { NavigateFunction } from "react-router-dom";

export interface productType {
  _id: string;
  name: string;
  description: string;
  price: number;
  // images are imported assets (bundler provides string paths or modules)
  image: string[];
  category: string;
  subCategory: string;
  sizes: string[];
  date: number;
  bestseller: boolean;
}

export type CartItemsType = Record<string, Record<string, number>>;

export interface ShopContextType {
  products: productType[];
  currency: string;
  delivery_fee: number;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  showSearch: boolean;
  setShowSearch: Dispatch<SetStateAction<boolean>>;
  cartItems: CartItemsType;
  addToCart: (itemId: string, size: string) => Promise<void> | void;
  getCartCount: () => number;
  updateQuantity: (itemId: string, size: string, quantity: number) => Promise<void> | void;
  getCartAmount: () => number;
  navigate: NavigateFunction;
}