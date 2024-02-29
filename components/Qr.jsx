import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { FaShareAltSquare } from "react-icons/fa";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { SlArrowUp } from "react-icons/sl";
import { IoIosAddCircleOutline } from "react-icons/io";
import Image from "next/image";

export default function Qr() {
  return (
    <div className="qr mt-4">
      <div className="qr_container relative  bg-white rounded-[21px] w-[343px] h-[409px] mx-auto p-4">
        {/*icons */}
        <div className="icons_container flex items-center ">
          <h2 className="  w-[30%] capitalize font-[700] text-[#363333]">
            qr code
          </h2>
          <div className="icons opacity-[.7] flex w-[70%] justify-around  ">
            <IoEyeOutline className=" text-[24px] h-[24px]" />
            <FaShareAltSquare className=" text-[24px] h-[24px] bg-black text-white" />
            <HiOutlineDocumentArrowDown className=" text-[24px] h-[24px]" />
            <div className=" w-[30px] h-[30px] rounded-full bg-[#FBE7EE] flex items-center justify-center ">
              <SlArrowUp className=" text-[16px] h-[24px]" />
            </div>
          </div>
        </div>
        {/*download section */}
        <div className="download mt-4 flex items-center bg-[#FFF5E9] rounded-[18px] p-4">
          <HiOutlineDocumentArrowDown className=" text-[30px] h-[24px] text-[#FF951D]" />
          <p className=" text-[12px] ml-4">
            Download the QR code or share it with your friends.
          </p>
        </div>

        {/*follow */}
        <div className="follow relative w-[311px] h-[270px] bg-gradient-to-r from-[#D20653] from-10%  to-[#FF951D] to-90% rounded-[18px] flex justify-center items-center">
          <div className="info w-[276px] h-[234.25px] rounded-[18px]  bg-white flex flex-col  items-center pt-2 ">
            <Image
              src={"https://staging.mazaady.com/images/mazaady-logo.svg"}
              width={150}
              height={150}
              alt="logo"
              className=" "
            />
            <h2 className="name capitalize text-[#363333] font-[700] mt-[5px]">
              hala ahmed
            </h2>
            <Image
              src={"/Gallary/squares.jpg"}
              width={117.28}
              height={116.45}
            />
            <p className=" text-[#363333] font-[400] ">Follow Us on Mazaady</p>
          </div>
        </div>
        <button className="add p-2 capitalize rounded-[10px] absolute top-[60%] right-0 z-10 flex items-center bg-gradient-to-r from-[#D20653] from-10%  to-[#FF951D] to-90% w-[125px] h-[40px] text-white">
          <IoIosAddCircleOutline className=" text-[14px]" />
          <span className=" ml-2 text-[14px]"> add review</span>
        </button>
      </div>
    </div>
  );
}
