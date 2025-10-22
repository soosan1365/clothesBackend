import React from "react";
import { assets } from "../assets";
import { Title } from "../components";

const Contact: React.FC = () => {
  return (
    <div className="  flex flex-col  justify-center gap-3   mt-20 md:mt-30">
      
       <Title text1="CONTACT US"/>
  
      <div className=" contact  flex flex-col  md:flex-row gap-10 rounded-2xl ">
        <img
          className="md:w-[80%]  rounded-2xl md:rounded-l-2xl"
          src={assets.contact_img}
          alt=""
        />
        <div className=" w-full flex flex-col justify-center items-center gap-6">
          <p className="  font-semibold text-xl md:text-2xl Subtotal px-10 py-2  text-gray-700">
            Our Store
          </p>
          <p className="text-gray-700 md:text-lg text-center  font-semibold">
            masih Statio- Suite 100
          </p>
          <p className="text-gray-700 font-semibold md:text-lg text-center">
            Tel: <span className="font-light">09162003147</span>
          </p>
          <p className="text-gray-700  font-semibold md:text-lg text-center">
            Email: <span className="font-light">soosan.adh@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
