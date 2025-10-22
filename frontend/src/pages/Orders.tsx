import React, { useContext } from "react";
import { ShopContext } from "../context";
import type { ShopContextType, productType } from "../type";

const Orders: React.FC = () => {
  const shop = useContext(ShopContext) as ShopContextType | undefined;
  if (!shop) return null;
  const { products, currency } = shop;

  return (
    <div className="mt-20   w-full md:max-w-[60%] lg:max-w-[50%] pt-12">
      <div className="flex  font-medium">
        <p
          className="pb-8 collection 
       text-[1.3rem]"
        >
          DELIVERY<span className="ml-3 ">INFORMATION</span>
        </p>
        <p className=" mt-4  ml-2 line w-8 sm:w-14 h-[1px] sm:h-[2px] bg-gray-700 "></p>
      </div>
      <div className="flex flex-col  justify-center gap-6 ">
        {products.slice(1, 4).map((item: productType) => (
          <div
            key={item._id}
            className="py-4  order text-gray-700   md:items-center md:justify-between gap-12"
          >
            <div className="flex items-start gap-6 text-sm">
              <img
                className=" image w-25"
                src={item.image?.[0]}
                alt=""
              />
              <div>
              <div className="flex gap-2  md:gap-8">
                <p className="sm:text-base collection  font-medium">
                  {item.name}
                </p>
            
              </div>
              <div className="flex flex-col gap-3 mt-2 text-base text-gray-700">
               <div className="flex  justify-center items-center gap-5"> <p className="text-lg">
                  {currency}
                  {item.price}
                </p>
                <p>Quantity:1</p>
                    <div className="flex items-center  gap-2">
                  <p className=" min-w-2 h-2  mt-2 rounded-full bg-teal-800"></p>
                  <p className="text-sm md:text-base   ">Ready to ship</p>
                </div></div>
                <div className="flex gap-5">
                <p>size:M</p>
                <p className="">
                Date:<span className="text-gray-400">25,jul,2024</span>
              </p></div>
              </div>
              </div>
            </div>

            <div className=" flex justify-between">
              <button className="border  line  text-sm font-medium  rounded-sm">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
