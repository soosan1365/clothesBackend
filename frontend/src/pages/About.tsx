import React from "react";
import NewsletterBox from "../components/NewsletterBox";

const About: React.FC = () => {
  return (
    <div>
      <div className="relative About flex  flex-col text-2xl
       mt-20 md:text-4xl font-semibold justify-center items-center
         border-t">
        <p
          className="absolute top-4 collection   
      "
        >
          ABOUT<span className="ml-3 ">US</span>
        </p>
        <p className=" mt-5  ml-2 line w-10 sm:w-14 h-[1px] sm:h-[2px] bg-gray-700 "></p>
      </div>
      <div className="my-3 flex justify-center flex-col md:flex-row gap-12">
        <div className="flex flex-col    text-justify  gap-6  text-gray-600">
          <div className=" md:flex md:flex-row gap-28 mt-5 text-center">
            <p>
              Come to the world of Celin brand and feel the creativity in every
              piece of design.
            </p>
            <p>
              The best collection of clothes is in front of you, so choose the
              best for you because you deserve the best.
            </p>
          </div>
          <b className="text-xl  text-center">
            Experience being different with the Celin brand
          </b>
        </div>
      </div>
      <div className="mt-12 ">
        <p
          className="  Subtotal text-gray-700  prata-regular text-center  text-[20px] 
      "
        >
          WHY<span className="ml-3  prata-regular text-gray-700">CHOOSE </span>
          <span className="ml-3 prata-regular text-gray-700"> US</span>
        </p>
      </div>
      <div className="flex pt-6 flex-col md:flex-row text-sm ">
        <div className=" px-10   sm:py-5  gap-5">
          <p className="CHOOSE    mb-3  ">Quality Assurance:</p>
          <p className="text-gray-600 mb-3 text-justify">
            uality assurance is a broad process for preventing quality failures.
            The selin team is involved in all stages of a product's development:
            production, testing, packaging, and delivery.
          </p>
        </div>
        <div className=" px-10   sm:py-5  gap-5">
          <p className="CHOOSE">Conveince:</p>

          <p className="text-gray-600  mb-3 text-justify">
            {" "}
            with our user-friendly interface and hassle-free ordering process
            ,shopping has never been eaiser{" "}
          </p>
        </div>
        <div className=" px-10  sm:py-5  gap-5">
          <p className="CHOOSE">Exceptional Customer Service:</p>

          <p className="text-gray-600  mb-3 text-justify">
            our team of dedicated professionals is here to assist you the
            way,ensuring your satisfaction is our top priority
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
