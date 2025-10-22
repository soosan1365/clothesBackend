import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context";
import { Title, ProductItem } from ".";
import type { productType, ShopContextType } from "../type";

interface RelatedProductsProps {
  category: string;
  subCategory: string;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ category, subCategory }) => {
  const shop = useContext(ShopContext) as ShopContextType | undefined;
  if (!shop) return null;
  const { products } = shop;
  // use Usesate for related products with the initial value of the empty array
  const [related, setRelated] = useState<productType[]>([]);
  useEffect(() => {
    if (products && products.length > 0) {
      let productsCopy = products.slice();

      productsCopy = productsCopy.filter((item: productType) => category === item.category);
      productsCopy = productsCopy.filter((item: productType) => subCategory === item.subCategory);
      setRelated(productsCopy.slice(0, 5));
    }
  }, [products, category, subCategory]);
  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={"RELETED"} text2={"PRODUCTS"} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:gride-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item: productType) => (
          <ProductItem
            key={item._id}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
