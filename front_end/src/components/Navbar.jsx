import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const currentUser = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header className="max-w-screen-2xl mx-auto px-14 py-6">
      <nav className="flex justify-between">
        <div className="flex items-center gap-4 md:gap-16">
          {" "}
          <AiOutlineBars onClick={toggleSidebar} className="size-6" />
          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
          <div>
            <IoSearchOutline className="size-5 absolute inline-block inset-y-8 " />
            <input
              type="text"
              placeholder="Search here"
              className="bg-slate-200 w-full py-1 md:px-8 px-6 focus:outline-none font-primary"
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 md:gap-5">
          <div>
            {currentUser ? (
              <>
                <button className="py-2 ">
                  <FaUser className="size-5 " />
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <FaRegUser className="size-5 " />
                </Link>
              </>
            )}
          </div>

          <button className="hidden sm:block">
            <FaRegHeart className="size-5 " />
          </button>
          <button className="bg-primary flex items-center justify-evenly w-full py-1 md:px-5 px-4 ">
            <MdOutlineShoppingCart />
            <span className="font-primary">0</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;