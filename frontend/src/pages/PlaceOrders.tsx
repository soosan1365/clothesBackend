import React, { useState, useContext } from "react";
import { CartTotal } from "../components";
import { assets } from "../assets";
import { ShopContext } from "../context";
import type { ShopContextType } from "../type";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrders: React.FC = () => {
  const [method, setMethod] = useState<string>("cod");
  const {
    navigate,
    backendURL,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext) as ShopContextType;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    zipcode: "",
    country: "",
    phone: "",
  });
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }
      let orderData = {
        address: formData,
        items: orderItems,
        paymentMethod: method,
        amount: getCartAmount() + delivery_fee,
      };
      switch (method) {
        case "cod":
          const response = await axios.post(
            backendURL + "/api/order/place",
            orderData,
            { headers: { token } }
          );

          if (response.data.success) {
            setCartItems({});
            navigate("/orders");
          } else {
            toast.error(response.data.message);
          }
          break;
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t"
    >
      {/* ----------------left side---------- */}
      <div className="flex  flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xlsm:text-2xl my-3">
          <p
            className="  
     text-[1rem] font-semibold pl-2 carttotal border "
          >
            DELIVERY<span className="ml-3 ">INFORMATION</span>
          </p>
        </div>
        <div className="flex gap-3">
          <input
            onChange={onChangeHandler}
            name="firstName"
            value={formData.firstName}
            className="border Subtotal border-gray-300 rounded w-full py-1.5 px-3.5"
            type="text"
            placeholder="First name"
          />
          <input
            onChange={onChangeHandler}
            name="lastName"
            value={formData.lastName}
            className="border Subtotal border-gray-300 rounded w-full py-1.5 px-3.5"
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          onChange={onChangeHandler}
          name="email"
          value={formData.email}
          className="border Subtotal border-gray-300 rounded w-full py-1.5 px-3.5"
          type="text"
          placeholder="Email address"
        />
        <input
          onChange={onChangeHandler}
          name="street"
          value={formData.street}
          className="border Subtotal border-gray-300 rounded w-full py-1.5 px-3.5"
          type="text"
          placeholder="Street"
        />

        <div className="flex gap-3">
          <input
            onChange={onChangeHandler}
            name="zipcode"
            value={formData.zipcode}
            className="border Subtotal border-gray-300 rounded w-full py-1.5 px-3.5"
            type="number"
            placeholder="Zipcode"
          />
          <input
            onChange={onChangeHandler}
            name="country"
            value={formData.country}
            className="border Subtotal border-gray-300 rounded w-full py-1.5 px-3.5"
            type="text"
            placeholder="country"
          />
        </div>
        <input
          onChange={onChangeHandler}
          name="phone"
          value={formData.phone}
          className="border Subtotal border-gray-300 rounded w-full py-1.5 px-3.5"
          type="number"
          placeholder="Phone"
        />
      </div>
      {/* --------------------right side------------------ */}
      <div className="mt-6">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <p
            className="  
       text-[1rem] font-semibold pl-2 mb-5 carttotal border "
          >
            DELIVERY<span className="ml-3 ">INFORMATION</span>
          </p>

          {/* -------------payment methoud selection */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className=" flex Subtotal items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 Subtotal h-3.5 border rounded-full ${
                  method === "stripe" ? " bg-green-900" : ""
                }`}
              ></p>
              <img className="h-5 mx-4  " src={assets.stripe_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className=" flex  Subtotal items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 Subtotal border rounded-full ${
                  method === "razorpay" ? "bg-green-900" : ""
                }`}
              ></p>
              <img className="h-5 mx-4 " src={assets.razorpay_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className=" flex Subtotal items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 Subtotal   h-3.5 border rounded-full ${
                  method === "cod" ? " bg-green-900" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8 ">
            <button type="submit" className="add">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrders;
