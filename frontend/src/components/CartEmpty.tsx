import { ArrowLeftFromLine } from "lucide-react";
import { assets } from "../assets";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <p>Your shopping cart is empty</p>

      <img
        src={assets.empty}
        alt="Empty Cart"
        className=" w-[60%] sm:w-[50%]
         md:w-[35%] "
      />
      <Link to="/collection" >
        <button className="bg-gradient-to-t rounded-2xl
          text-sm md:text-lg px-3 py-1 mr-6 from-[#ebf18f] to-[orange] 
         mb-12 flex justify-center items-center gap-2"><ArrowLeftFromLine/> SHOP NOW </button>
      </Link>
    </div>
  );
};

export default CartEmpty;
