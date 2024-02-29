import React from "react";
import { FaBars } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineGlobal } from "react-icons/ai";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav className=" mx-2 md:mx-4 xl:mx-6 flex justify-between my-4">
      {/*logo container */}
      <div className="logo_container flex">
        <div className="logo flex items-center justify-start">
          <FaBars className=" cursor-pointer text-[30px] md:hidden" />
          <Image
            src={"https://staging.mazaady.com/images/mazaady-logo.svg"}
            width={150}
            height={150}
            alt="logo"
            className=" ml-4"
          />
        </div>
        {/*list */}
        <ul className="list ml-[20px] flex items-center w-[300px] justify-around capitalize font-bold xs:hidden md:flex">
          <li className=" text-[#D20653] ">home</li>
          <li>blog</li>
          <li>gifts</li>
        </ul>
      </div>

      {/* icons container */}
      <div className="icons_container flex">
        {/*icons */}
        <div className="icons flex justify-between items-center mx-4 ">
          <FaRegCircle className=" text-[30px]" />
          <IoIosNotificationsOutline className=" mx-8 sm:mx-4 text-[32px]" />
          <Image
            src={"/Gallary/girl.jpg"}
            width={25}
            height={25}
            quality={100}
            className=" rounded-full"
          />
        </div>
        {/* new */}
        <div className="new flex text-[30px] items-center  xs:hidden md:flex ">
          <button className=" capitalize text-[16px] text-white px-4 py-2 bg-gradient-to-r from-[#D20653] from-10%  to-[#FF951D] to-90% rounded-[10px] ">
            add new product
          </button>

          <AiOutlineGlobal className=" mx-6" />
          <p> EN</p>
        </div>
      </div>
    </nav>
  );
}
