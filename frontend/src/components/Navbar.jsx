import React, { useState } from "react";
import { Link } from "react-router";
import { AiOutlineBars } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { FaLinesLeaning, FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUser } from "react-icons/fa6";

const navigation = [
  { name: "Dashboad", href: "/dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Home", href: "/" },
  { name: "Checkout", href: "/checkout" },
];

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const currentUser = true;
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  return (
    <header className=" max-w-screen-2xl mx-auto px-14 py-6">
      <nav className=" flex justify-between">
        <div className=" flex items-center gap-4 md:gap-16 ">
          <Link to="/">
            <AiOutlineBars className="size-6" />
          </Link>
          <div>
            <IoSearchOutline className="size-4 absolute inline-block inset-y-8 " />
            <input
              type="text"
              placeholder="Search here"
              className="bg-slate-200 w-full py-1 md:px-8 px-6 focus: outline-none font-primary"
            />
          </div>
        </div>
        <div className=" flex items-center justify-between gap-2 md:gap-5 ">
          <div>
            {currentUser ? (
              <>
                <button onClick={toggleDropdown} className="py-2 ">
                  <FaUser className="size-5 " />
                </button>
                {isDropdownVisible && (
                  <div className=" absolute right-0 mt-2 mr-10  w-48 h-auto bg-white shadow-lg rounded-md ">
                    <ul>
                      {navigation.map((item) => (
                        <li
                          key={item.name}
                          onClick={() => setIsDropdownVisible(false)}
                          className="py-2 pl-3 text-sm hover:bg-gray-200"
                        >
                          <Link to={item.href}>{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <FaRegUser className="size-5 " />
              </Link>
            )}
          </div>

          <button className="hidden sm:block">
            <FaRegHeart className="size-5 " />
          </button>
          <button className=" bg-primary flex items-center justify-evenly w-full py-1 md:px-5 px-4 ">
            <MdOutlineShoppingCart />
            <span className="font-primary"> 0</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
