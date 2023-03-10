import React from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import {BiMenu} from "react-icons/bi"
import { Link } from "react-router-dom";
import logo from "../assests/MGWGCPC_fp01.avif"

function Header() {
  return (

      <header id="main" className="bg-white text-black h-[9rem] fixed top-0 left-0 right-0">
        <div className="bg-[#076eaa] h-[2.4rem] w-full flex items-center justify-center text-white">
          <p>place-holder</p>
        </div>
        <div className="container mx-auto px-4 flex w-full h-[3.34rem] items-center justify-between ">
          <div className="menu-toggle">
            <button className="focus:outline-none">
              <BiMenu size={30} />
            </button>
          </div>
          <div className="logo">
            <img src={logo} alt="Company Logo" className="h-8" />
          </div>
          <nav className="hidden md:block ">
            <ul className="flex">
              <li className="mr-6">
                <Link to="/" className=" text-black hover:text-gray-500">Buy GiftCards</Link>
              </li>
              <li className="mr-6">
                <Link to="/products" className="text-black hover:text-gray-500">Deal</Link>
              </li>
              <li className="mr-6">
                <Link to="/about" className="text-black hover:text-gray-500">Promos</Link>
              </li>
              <li className="mr-6">
              <Link to="/contact" className="text-black hover:text-gray-500">Group Gift</Link>
              </li>
              <li>
                <Link to="/welcome" className="text-black hover:text-gray-500">Buy with Chimoney</Link>
              </li>
            </ul>
          </nav>
          <div className="account ml-4">
            <button className="focus:outline-none">
              <FaUser size={30} />
            </button>
          </div>
          <div className="add-to-cart">
            <button className="focus:outline-none">
              <FaShoppingCart size={30} />
            </button>
          </div>
        </div>
      </header>

  );
}

export default Header;
