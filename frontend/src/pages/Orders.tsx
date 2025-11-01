import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context";
import type { OrderItem, ShopContextType } from "../type";
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
        response.data.orders.map((order:OrderItem) => {
          order.items.map((item:any) => {
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
    <div className="mt-20   w-full  pt-12">
      <div className="flex  font-medium">
        <p
          className="pb-8 collection 
       text-[1.3rem]"
        >
          DELIVERY<span className="ml-3 ">INFORMATION</span>
        </p>
        <p className=" mt-4  ml-2 line w-8 sm:w-14 h-[1px] sm:h-[2px] bg-gray-700 "></p>
      </div>
      <div className="flex flex-col w-full justify-center gap-6">
        {orderData.length === 0 ? (
          <p className="text-center text-gray-500 py-12">No orders found.</p>
        ) : (
          orderData.map((item: any) => (
            <div
              key={item._id}
              className="bg-white border border-slate-100 rounded-lg shadow-sm p-4 grid grid-cols-1 gap-4
                         sm:grid-cols-[auto_1fr_auto] lg:grid-cols-[0.6fr_2fr_0.8fr] items-start"
            >
                 {/* image & basic */}
              <div className="flex items-center gap-4">
                <img
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md"
                  src={item.image?.[0] ?? ""}
                  alt={item.name ?? "product"}
                />
              </div>
               {/* details */}
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-sm sm:text-base font-medium collection line-clamp-2">
                    {item.name}
                  </p>
                  {item.description ? (
                    <p className="text-xs sm:text-sm text-gray-700 mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  ) : null}
                </div>

                <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm text-gray-700">
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="text-lg font-semibold">
                      {currency}
                      {item.price}
                    </span>
                     <span className="text-sm">Qty: {item.quantity ?? 1}</span>
                    <span className="text-sm">Size: <strong>{Array.isArray(item.size) ? item.size.join(", ") : item.size ?? "-"}</strong></span>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-teal-700" />
                      <span className="text-sm">{item.status ?? "Status unknown"}</span>
                    </div>
                  </div>

                  <div className="text-sm text-gray-700">
                    <div>{item.date ? new Date(item.date).toLocaleString() : "-"}</div>
                    <div className="mt-1">Payment: <span className="text-gray-800">{String(item.paymentMethod ?? item.payment ?? "-")}</span></div>
                  </div>
                </div>
              </div>
                   {/* actions */}
              <div className="flex flex-col items-end justify-between gap-2">
            
                <button onClick={loadOrderData} className=" hover:bg-red-100  hover:text-black mt-2 w-full sm:w-auto px-3 py-2 bg-black text-white text-sm rounded-md">
                  Track Order
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      {/* <div className="flex flex-col w-full justify-center gap-6 ">
        {orderData.map((item: any) => (
          <div
            key={item._id}
            className=" grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] 
            lg:grid-cols-[0.5fr_2fr_1fr] py-4  order text-gray-700   md:items-center md:justify-between gap-12"
          >
            <div className="flex items-start gap-6 text-sm">
              <img className=" image w-25" src={item.image?.[0]} alt="" />
              <div>
                <div className="flex gap-2  md:gap-8">
                  <p className="sm:text-base collection  font-medium">
                    {item.name}
                  </p>
                </div>
                
                  <div className="flex  justify-center items-center gap-5">
                
                    <p className="text-lg">
                      {currency}
                      {item.price}
                    </p>
                    <p>Quantity:{item.quantity}</p>
                  
                      <p className=" min-w-2 h-2  mt-2 rounded-full bg-teal-800"></p>
                      <p className="text-sm md:text-base   ">{item.status}</p>
                   
                  
                 
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

            <div className=" flex justify-between">
              <button onClick={loadOrderData} className="border  line  text-sm font-medium  rounded-sm">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Orders;
