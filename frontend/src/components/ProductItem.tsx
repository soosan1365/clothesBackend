import React, { useContext } from "react";
import { ShopContext } from "../context";
import { Link } from "react-router-dom";
import type { ShopContextType } from "../type";

interface ProductItemProps {
  id: string;
  image: string[];
  name: string;
  price: number;
}

// createing the structure and items  of each product
const ProductItem: React.FC<ProductItemProps> = ({ id, image, name, price }) => {
  const shop = useContext(ShopContext) as ShopContextType | undefined;
  if (!shop) return null;
  const { currency } = shop;
  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden ">
        <img
          className=" image hover:scale-110 transition  ease-in-out rounded-[5%]  "
          src={image?.[0]}
          alt=""
        />
      </div>

      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
