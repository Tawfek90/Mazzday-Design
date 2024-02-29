import React from "react";
import Image from "next/image";
import { LuUserCheck2 } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import { CiStar } from "react-icons/ci";

export default function Intro() {
  return (
    <div className="intro p-2 ">
      <div className="intro_container w-[350px] h-[343px] mx-auto bg-white rounded-[24px] py-4 px-6">
        <Image
          src={"/Gallary/girl.jpg"}
          alt="photo"
          width={80}
          height={80}
          className="rounded-[20px] my-2 w-[80px] h-[80px]"
        />
        {/*info */}
        <div className="info">
          <h2 className="name capitalize font-[700] text-[#363333] ">
            hala ahmed
          </h2>
          <p className=" opacity-[.7] text-[14px]">
            I am Hala Ahmed, I am the owner of the local brand called Beauty
            which is for Mackeup and Skin Care.
          </p>
        </div>
        {/*followers */}
        <div className="followers my-2 flex items-center  gap-2">
          <div className="person relative p-2 w-[100px] h-[59px]  rounded-[18px] flex items-center bg-[#FFF5E9]">
            <LuUserCheck2 className=" text-[#FF951D] text-[28px] absolute left-[6px]" />
            <div className="numb_container ml-2 ml-8 text-[12px] ">
              <div className="number font-bold">5</div>
              <p className=" text-[#FF951D]  capitalize">following</p>
            </div>
          </div>

          <div className="person relative p-2 w-[100px] h-[59px]  rounded-[18px] flex items-center bg-[#FFF5E9]">
            <CiUser className=" text-[#FF951D] text-[28px] absolute left-[6px]" />
            <div className="numb_container ml-2 ml-8 text-[12px] ">
              <div className="number font-bold">20</div>
              <p className=" text-[#FF951D]  capitalize">following</p>
            </div>
          </div>

          <div className="person relative  w-[100px] h-[59px]  rounded-[18px] flex items-center bg-[#FFF5E9]">
            <CiStar className=" text-[#FF951D] text-[28px] absolute left-[6px]" />
            <div className="numb_container ml-2 ml-8 text-[12px] ">
              <div className="number font-bold">
                4.2 <span className=" opacity-[.4] ml-[2px]">(15)</span>
              </div>
              <p className=" text-[#FF951D]  capitalize">Rate</p>
            </div>
          </div>
        </div>
        {/* follow btn */}
        <button className=" bg-gradient-to-r from-[#D20653] from-10%  to-[#FF951D] to-90%  w-[311px]  h-[48px] rounded-[14px] capitalize text-white">
          follow
        </button>
      </div>
    </div>
  );
}
