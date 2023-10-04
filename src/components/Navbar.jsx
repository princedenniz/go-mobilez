import { useState } from "react";
import { close, logo, telephone, logoo, menu } from "../assets";
import { navLinks } from "../constant";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <nav className="w-full flex py-20 justify-between items-center navbar">
        <img src={telephone} alt="hoobank" className="w-[100px] fixed z-[30] h-[50px] hidden rounded-[20px] md:flex lg:flex " />
        <ul className="list-none sm:flex hidden fixed z-[30] left-[70%] justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end fixe items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain fixed z-[30]"
          onClick={() => setToggle((prev)=> !prev)}
          
        />
       
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black-gradient fixed z-[30] top-20 right-0 mx-4 py-[4rem] my-6 min-w-[140px] rounded-xl sidebar`}
          >
              <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal leading-[5rem] cursor-pointer text-[16px]  ${index === navLinks.length - 1 ? "mr-0" : "mb-4"} text-white`}
                
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
