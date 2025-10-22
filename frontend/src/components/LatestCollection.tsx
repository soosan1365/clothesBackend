import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context";
import { Title, ProductItem } from ".";
import type { productType, ShopContextType } from "../type";

const LatestCollection: React.FC = () => {
  // catch products from shopcontext
  const shop = useContext(ShopContext) as ShopContextType | undefined;

  // guard in case context is undefined
  const products = shop?.products ?? [];

  // useState with typed product array
  const [latestProducts, setLatestProducts] = useState<productType[]>([]);

  // update latestProducts whenever products change
  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="">
      <div className="text-center py-5  text-3xl  ">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-sm sm:text-sm  md:text-base text-gray-600">
          The latest collection of special clothes for your tomorrow look
        </p>
      </div>
      {/* Rendering Products */}
      <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4  gap-y-6">
        {/*  map into latestProducts for show latest Products*/}
        {latestProducts.map((item) => (
          // use product _id as stable key
          <ProductItem key={item._id} id={item._id} image={item.image} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
