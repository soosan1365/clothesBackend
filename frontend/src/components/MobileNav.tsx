
import { MenuIcon } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {  NavLink } from "react-router-dom";


const MobileNav = () => {
  return (
    <div className=" md:hidden   ">
      <Sheet>
        <SheetTrigger>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent>
          <div className="  flex flex-col justify-center ml-10 gap-20 items-start mt-20 w-22">
           <ul className="flex flex-col gap-5 text-sm text-gray-700 font-bold">
        <NavLink to="/" className="flex flex-col  item-center gap-1 rounded-4xl px-5 py-2
         ">
          <p>HOME</p>
        </NavLink>
        <NavLink to="/collection" className="flex flex-col  item-center gap-1  rounded-4xl px-5 py-2
        ">
          <p>COLLECTION</p>
        </NavLink>
        <NavLink to="/about" className="flex flex-col  item-center gap-1  rounded-4xl px-5 py-2">
          <p>ABOUT</p>
        </NavLink>
        <NavLink to="/contact" className="flex flex-col  item-center gap-1  rounded-4xl px-5 py-2">
          <p>CONTACT</p>
        </NavLink>
      </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav
