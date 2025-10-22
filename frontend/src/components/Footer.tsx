import { assets } from "../assets";

const Footer = () => {
  return (
    <div className=" shadow-green-700 w-full  ">
      <hr className=" h-1 bg-gradient-to-b from-[#568064] to-[#a6e2ba]"/>
      <div className="flex flex-col sm:grid grid-cols-[1fr_2fr]    ">
        <div className=" ">
          <img src={assets.logo} className="mb-2 w-32 " />
          <p className="w-full  text-xl shoar text-gray-600">
            You pretty, so wear pretty
          </p>
        </div>
<div className=" flex justify-around   gap-10">
        <div>
          <p className="text-lg font-medium mb-3 mt-4 text-gray-700">
            COMPANY
          </p>
          <ul className=" flex flex-col gap-1 text-gray-600">
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Delivery
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                privacy policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-lg font-medium mb-3 mt-4 text-gray-700">
            GET IN TOUCH
          </p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>09162003147</li>
            <li>soosan.adh@gmail.com</li>
          </ul>
        </div>
        </div>
      </div>
      <div>
        <p className="  md:w-[70rem] opacity-45 h-[1px]  bg-gray-700 "></p>
        <p className="py-2 text-sm text-center  ">
          {" "}
          CopyRight 2024@selin.com-All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
