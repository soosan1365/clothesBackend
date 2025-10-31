import type { Dispatch, SetStateAction } from "react";
import type { NavigateFunction } from "react-router-dom";

export interface productType {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string[];
  category: string;
  subCategory: string;
  sizes: string[];
  bestseller: boolean;
  size:string;
  quantity:number;
  date?: string;
}
export type OrderItem = productType & {
  quantity?: number;
  size?: string | string[];
  payment?: string | { method?: string; status?: string };
  paymentMethod?: string;
  status?: string;
  date?: string;
};

export type Order = {
  _id: string;
  items: OrderItem[];
  status?: string;
  payment?: string | { method?: string; status?: string };
  paymentMethod?: string;
  date?: string;
  amount?: number;
};

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
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  backendURL: string;
  setCartItems: Dispatch<SetStateAction<CartItemsType>>;
}