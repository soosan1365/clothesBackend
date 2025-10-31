import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context";
import type { Order, OrderItem, ShopContextType } from "../type";
import axios from "axios";

const Orders: React.FC = () => {
  const { backendURL, token, currency } = useContext(
    ShopContext
  ) as ShopContextType;
  const [orderData, setOrderData] = useState<OrderItem[]>([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }
      const response = await axios.post(
        backendURL + "/api/order/userOrders",
        {},
        { headers: { token } }
      );
      if (response.data.success) {

        let allOrdersitem: OrderItem[] = [];
        response.data.orders.map((order: Order) => {
          order.items.map((item :OrderItem) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrdersitem.push(item);
          });
        });
        setOrderData(allOrdersitem.reverse());
      }
    } catch (error) {
      
    }
  };
  useEffect(() => {
    loadOrderData();
  }, [token]);

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
        {orderData.map((item: any) => (
          <div
            key={item._id}
            className="py-4  order text-gray-700   md:items-center md:justify-between gap-12"
          >
            <div className="flex items-start gap-6 text-sm">
              <img className=" image w-25" src={item.image?.[0]} alt="" />
              <div>
                <div className="flex gap-2  md:gap-8">
                  <p className="sm:text-base collection  font-medium">
                    {item.name}
                  </p>
                </div>
                <div className="flex flex-col gap-3 mt-2 text-base text-gray-700">
                  <div className="flex  justify-center items-center gap-5">
                    {" "}
                    <p className="text-lg">
                      {currency}
                      {item.price}
                    </p>
                    <p>Quantity:{item.quantity}</p>
                    <div className="flex items-center  gap-2">
                      <p className=" min-w-2 h-2  mt-2 rounded-full bg-teal-800"></p>
                      <p className="text-sm md:text-base   ">{item.status}</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <p>size:{item.size}</p>
                    <p className="">
                      Date:
                      <span className="text-gray-400">
                        {new Date(item.date).toDateString()}
                      </span>
                    
                    </p>
                      payment:
                      <span className="text-gray-400">
                        {item.paymentMethod}
                      </span>
                  </div>
                </div>
              </div>
            </div>

            <div className=" flex justify-between">
              <button onClick={loadOrderData} className="border  line  text-sm font-medium  rounded-sm">
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
