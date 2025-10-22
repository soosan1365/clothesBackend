
import { assets } from "../assets";

const Hero = () => {
  return (
    <div className=" hero flex flex-col   rounded-tl-[15%] sm:flex-row  border border-gray-800">
      {/* hero left side */}
      <div className="  w-full  sm:w-1/2 flex items-center justify-center  pt-10  ">
        <div className="box   md:pt-38 lg:pt-40  pl-16 lg:pl-32 text-[#414141]">
          <div className="flex items-center  gap-2">
            <p className=" line w-6 md:w-11 h-[2px]"> </p>
            <p className="  font-medium text-xl md:text-base">
              OUR BESTSELLERS
            </p>
          </div>
          <h1 className=" prata-regular collection rounded-2xl
            text-3xl sm:py-1 lg:text-4xl  leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex items-center pb-20 gap-2">
            <p className="font-semibold  text-xl md:text-base">SHOP NOW</p>
            <p className=" line w-16 md:w-16 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      {/* hero right side */}
      <img src={assets.hero_img} className="w-full hero-img  sm:w-1/2 " />
    </div>
  );
};

export default Hero;
