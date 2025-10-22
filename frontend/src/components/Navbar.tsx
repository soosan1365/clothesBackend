import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context";
import type { ShopContextType } from "../type";
import MobileNav from "./MobileNav";

const Navbar: React.FC = () => {

  const [navblur, setNavblur] = useState<boolean>(false);
  const startScroll = () => {
    if (window.scrollY >50) {
      setNavblur(true);
    } else {
      setNavblur(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", startScroll);

    return () => {
      window.removeEventListener("scroll", startScroll);
    };
  }, []);



  const shop = useContext(ShopContext) as ShopContextType | undefined;
  if (!shop) return null;
  const { getCartCount } = shop;

  return (
    <div
      className={` ${
        !navblur
          ? "absolute top-0 left-0 right-0 opacity-100 z-50 px-10 py-2 bg-white"
          : "fixed top-0 left-0 right-0 px-10 opacity-100 z-50 bg-white/90 "
      }`}
    >
      <div
        className="flex  items-center justify-between
      font-medium text-gray-700  "
      >
        <Link to="/">
          <img src={assets.logo} className="logo w-20  md:w-35" alt="" />
        </Link>
        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          <NavLink to="/" className="flex flex-col  item-center gap-1 ">
            <p>HOME</p>
          </NavLink>
          <NavLink
            to="/collection"
            className="flex flex-col  item-center gap-1"
          >
            <p>COLLECTION</p>
          </NavLink>
          <NavLink to="/about" className="flex flex-col  item-center gap-1">
            <p>ABOUT</p>
          </NavLink>
          <NavLink to="/contact" className="flex flex-col  item-center gap-1">
            <p>CONTACT</p>
          </NavLink>
        </ul>
        <div className="flex item-center gap-6">
          <div className="group relative">
            <Link to="/login">
              <img
                className="w-5 cursor-pointer"
                src={assets.profile_icon}
                alt=""
              />
            </Link>

            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className=" flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-600 rounded">
                <p className="cursor-pointer hover:text-blue-900">My Profile</p>
                <p className="cursor-pointer hover:text-blue-900"> Orders</p>
                <p className="cursor-pointer hover:text-blue-900">Logout</p>
              </div>
            </div>
          </div>
          <Link to="/cart" className="relative ">
            <img
              src={assets.cart_icon}
              className="w-6 font-bold  min-w-5"
              alt=""
            />
            <p className=" absolute right-[-5px] bottom-[-5px] w-5 text-center leading-5 bg-blue-950 hover:bg-red-600 text-white aspect-square rounded-full text-[11px]">
              {getCartCount()}
            </p>
          </Link>
          <MobileNav />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
