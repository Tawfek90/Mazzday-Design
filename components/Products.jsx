import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import Image from "next/image";
export default function Products() {
  return (
    <div className="products my-4">
      <div className="products_container lg:w-[93%] lg:ml-[6%] md:w-[82%] p-4 w-[343px] h-[879px] rounded-[24px] bg-white mx-auto">
        {/*list */}
        <div className="list_container flex items-center ">
          {/*list ul*/}
          <ul className="list  capitalize text-[14px] font-[400] flex items-center justify-between md:justify-start ">
            <li className=" bg-[#FFF5E9] font-extrabold text-[#FF951D] border-2 rounded-[14px] py-2 px-4 border-[#FF951D]">
              products
            </li>
            <li className=" border-2 text-[#828282] md:mx-4 font-[400] rounded-[14px] py-2 px-4">
              articles
            </li>
            <li className="border-2 text-[#828282] font-[400] rounded-[14px] py-2 px-4">
              reviews
            </li>
          </ul>
          {/*button */}
          <button className="add hidden md:flex ml-auto p-2 capitalize rounded-[10px]   flex items-center bg-gradient-to-r from-[#D20653] from-10%  to-[#FF951D] to-90% w-[125px] h-[40px] text-white">
            <IoIosAddCircleOutline className=" text-[14px]" />
            <span className=" ml-2 text-[14px]"> add review</span>
          </button>
        </div>

        {/*products */}
        <div className="productsList mt-6">
          <h1 className="title capitalize text-[#333333] font-[800] text-[24px] ">
            products <span className=" opacity-[.7] font-[300]">(12)</span>
          </h1>
          <div className="products_items mt-4">
            <div className="item flex items-start justify-between md:justify-start my-6">
              <div className="img_container relative">
                <Image
                  src={"/Gallary/clothes.jpg"}
                  width={87}
                  height={72.2}
                  alt="image"
                  className=" w-[87px] h-[72.2px] object-cover rounded-[15px] "
                />
                {/*icon container */}
                <div className="icon_container absolute top-[10%] left-[2%] md:left-[404px] w-[24px] h-[24px] rounded-full bg-white flex items-center justify-center ">
                  <CiHeart className=" text-[17px] " />
                </div>
                {/*live Auction */}
                <div className="live rounded-tl-[13px] rounded-br-[13px] flex items-center justify-center absolute bottom-0 right-[0] font-[400px] text-[8px] bg-[#D20653] text-white w-[66px] h-[20px]   ">
                  live Auction
                </div>
              </div>
              {/*Info */}
              <div className="info text-[#333333] ml-[8px] capitalize md:ml-[32px] md:ml-[32px]">
                <h2 className=" font-[700] text-[12px] w-[224px] h-[32px]  ">
                  Six-piece clothing set (blouse - pants - hat and ...
                </h2>
                <p className=" text-[#828282]">
                  starting price
                  <span className=" text-[#333333] ml-2 font-[400]">
                    1000 EGP
                  </span>
                </p>
                <p className=" text-[#828282]">Lot starts in</p>
                {/* time list*/}
                <ul className="timeList grid grid-cols-3 gap-2 mt-2 text-[8px] text-center font-[700]">
                  <li className=" bg-[#FFF5E9] text-[#FF951D] p-2 rounded-[14px]">
                    2 days
                  </li>
                  <li className=" bg-[#FFF5E9] text-[#FF951D] p-2 rounded-[14px]">
                    10 hours
                  </li>
                  <li className=" bg-[#FFF5E9] text-[#FF951D] p-2 rounded-[14px]">
                    50 minutes
                  </li>
                </ul>
              </div>
            </div>
            {/*end */}
            <div className="item flex items-start justify-between md:justify-start my-8">
              <div className="img_container relative">
                <Image
                  src={"/Gallary/coin.jpg"}
                  width={87}
                  height={72.2}
                  alt="image"
                  className=" w-[87px] h-[72.2px] object-cover rounded-[15px] "
                />
                {/*icon container */}
                <div className="icon_container absolute top-[10%]  left-[2%] md:left-[404px] w-[24px] h-[24px] rounded-full bg-white flex items-center justify-center">
                  <CiHeart className=" text-[17px] " />
                </div>
                {/*live Auction */}
                <div className="live rounded-tl-[13px] rounded-br-[13px] flex items-center justify-center absolute bottom-0 right-[0] font-[400px] text-[8px] bg-[#D20653] text-white w-[66px] h-[20px]   ">
                  live Auction
                </div>
              </div>
              {/*Info */}
              <div className="info text-[#333333] ml-[8px] capitalize md:ml-[32px]">
                <h2 className=" font-[700] text-[12px] w-[224px] h-[32px] ">
                  Six-piece clothing set (blouse - pants - hat and ...
                </h2>
                <p className=" text-[#828282]">
                  starting price
                  <span className=" text-[#333333] ml-2 font-[400]">
                    1000 EGP
                  </span>
                </p>
                <p className=" text-[#828282]">Lot starts in</p>
                {/* time list*/}
                <ul className="timeList grid grid-cols-3 gap-2 mt-2 text-[8px] text-center font-[700]">
                  <li className=" bg-[#FFF5E9] text-[#FF951D] p-2 rounded-[14px]">
                    2 days
                  </li>
                  <li className=" bg-[#FFF5E9] text-[#FF951D] p-2 rounded-[14px]">
                    10 hours
                  </li>
                  <li className=" bg-[#FFF5E9] text-[#FF951D] p-2 rounded-[14px]">
                    50 minutes
                  </li>
                </ul>
              </div>
            </div>
            {/*end */}
            <div className="item flex items-start justify-between md:justify-start my-8">
              <div className="img_container relative">
                <Image
                  src={"/Gallary/shirts.jpg"}
                  width={87}
                  height={72.2}
                  alt="image"
                  className=" w-[87px] h-[72.2px] object-cover rounded-[15px] "
                />
                {/*icon container */}
                <div className="icon_container absolute top-[10%] left-[2%] md:left-[404px] w-[24px] h-[24px] rounded-full bg-white flex items-center justify-center">
                  <FaHeart className=" text-[17px] text-[#D20653] " />
                </div>
                {/*live Auction */}
                <div className="live rounded-tl-[13px] rounded-br-[13px] flex items-center justify-center absolute bottom-0 right-[0] font-[400px] text-[8px] bg-[#D20653] text-white w-[66px] h-[20px]   ">
                  live Auction
                </div>
              </div>
              {/*Info */}
              <div className="info text-[#333333] ml-[8px] capitalize md:ml-[32px]">
                <h2 className=" font-[700] text-[12px] w-[224px] h-[32px] ">
                  Six-piece clothing set (blouse - pants - hat and ...
                </h2>
                <p className=" text-[#828282]">
                  starting price
                  <span className=" text-[#333333] ml-2 font-[400]">
                    1000 EGP
                  </span>
                </p>
                <p className=" text-[#828282]">Lot starts in</p>
                {/* time list*/}
                <ul className="timeList grid grid-cols-3 gap-2 mt-2 text-[8px] text-center font-[700]">
                  <li className=" bg-[#FFF5E9] text-[#FF951D] p-2 rounded-[14px]">
                    2 days
                  </li>
                  <li className=" bg-[#FFF5E9] text-[#FF951D] p-2 rounded-[14px]">
                    10 hours
                  </li>
                  <li className=" bg-[#FFF5E9] text-[#FF951D] p-2 rounded-[14px]">
                    50 minutes
                  </li>
                </ul>
              </div>
            </div>
            {/*end */}
            <div className="item flex items-start justify-between md:justify-start my-8">
              <div className="img_container relative">
                <Image
                  src={"/Gallary/jaket.jpg"}
                  width={87}
                  height={72.2}
                  alt="image"
                  className=" w-[87px] h-[72.2px] object-cover rounded-[15px] "
                />
                {/*icon container */}
                <div className="icon_container absolute top-[10%] left-[2%] md:left-[404px] w-[24px] h-[24px] rounded-full bg-white flex items-center justify-center">
                  <CiHeart className=" text-[17px] " />
                </div>
                {/*live Auction */}
                <div className="live rounded-tl-[13px] rounded-br-[13px] flex items-center justify-center absolute bottom-0 right-[0] font-[400px] text-[8px] bg-[#D20653] text-white w-[66px] h-[20px]   ">
                  live Auction
                </div>
              </div>
              {/*Info */}
              <div className="info text-[#333333] ml-[8px] capitalize md:ml-[32px]">
                <h2 className=" font-[700] text-[12px] w-[224px] h-[32px] ">
                  Six-piece clothing set (blouse - pants - hat and ...
                </h2>
                <p className=" text-[#828282]">
                  starting price
                  <span className=" text-[#333333] ml-2 font-[400]">
                    1000 EGP
                  </span>
                </p>
                <p className=" text-[#828282]">Lot starts in</p>
                {/* time list*/}
                <ul className="timeList grid grid-cols-3 gap-2 mt-2 text-[8px] text-center font-[700]">
                  <li className=" bg-[#FFF5E9] text-[#FF951D] p-2 rounded-[14px]">
                    2 days
                  </li>
                  <li className=" bg-[#FFF5E9] text-[#FF951D] p-2 rounded-[14px]">
                    10 hours
                  </li>
                  <li className=" bg-[#FFF5E9] text-[#FF951D] p-2 rounded-[14px]">
                    50 minutes
                  </li>
                </ul>
              </div>
            </div>
            {/*end */}
            <div className="item flex items-start justify-between md:justify-start my-8">
              <div className="img_container relative">
                <Image
                  src={"/Gallary/bird.jpg"}
                  width={87}
                  height={72.2}
                  alt="image"
                  className=" w-[87px] h-[72.2px] object-cover rounded-[15px] "
                />
                {/*icon container */}
                <div className="icon_container absolute top-[10%] left-[2%] md:left-[404px] w-[24px] h-[24px] rounded-full bg-white flex items-center justify-center">
                  <FaHeart className=" text-[17px] text-[#D20653]" />
                </div>
                {/*live Auction */}
                <div className="live rounded-tl-[13px] rounded-br-[13px] flex items-center justify-center absolute bottom-0 right-[0] font-[400px] text-[8px] bg-[#D20653] text-white w-[66px] h-[20px]   ">
                  live Auction
                </div>
              </div>
              {/*Info */}
              <div className="info text-[#333333] ml-[8px] capitalize md:ml-[32px]">
                <h2 className=" font-[700] text-[12px] w-[224px] h-[32px] ">
                  Six-piece clothing set (blouse - pants - hat and ...
                </h2>
                <p className=" text-[#828282]">
                  starting price
                  <span className=" text-[#333333] ml-2 font-[400]">
                    1000 EGP
                  </span>
                </p>
                <p className=" text-[#828282]">Lot starts in</p>
                {/* time list*/}
                <ul className="timeList grid grid-cols-3 gap-2 mt-2 text-[8px] text-center font-[700]">
                  <li className=" bg-[#FFF5E9] text-[#FF951D] p-2 rounded-[14px]">
                    2 days
                  </li>
                  <li className=" bg-[#FFF5E9] text-[#FF951D] p-2 rounded-[14px]">
                    10 hours
                  </li>
                  <li className=" bg-[#FFF5E9] text-[#FF951D] p-2 rounded-[14px]">
                    50 minutes
                  </li>
                </ul>
              </div>
            </div>
            {/*end */}
          </div>
        </div>
      </div>
    </div>
  );
}
