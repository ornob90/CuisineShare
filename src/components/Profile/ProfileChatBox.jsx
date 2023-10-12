import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import Button from "../Shared/Button";

const ProfileChatBox = ({ chatBoxOpen, setChatBoxOpen }) => {
  return (
    <div
      className={`w-full sm:w-[70%] md:w-[50%] lg:w-[30%] h-[60%] shadow-lg rounded-xl fixed  bg-white z-10 duration-[.3s] ${
        chatBoxOpen ? "bottom-0 right-0 md:right-[10%]" : "right-[-100%]"
      } grid grid-cols-1 grid-rows-6 min-h-[300px]`}
    >
      <div className="row-span-5 border rounded-t-xl">
        <div className="w-full h-[15%] bg-yellow-400 rounded-t-xl flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-[35px] w-[35px] rounded-full border-black border-2 ml-2"></div>
            <p className="font-bold">Kazi Towfiq</p>
          </div>

          <p className="text-3xl ">
            <GrFormClose
              onClick={() => setChatBoxOpen(!chatBoxOpen)}
              className="duration-[.3s]"
            />
          </p>
        </div>

        <ul className="space-y-2 mt-4 h-[80%] overflow-auto pr-2 min-h-[100px]">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <span key={item}>
              <li className="w-full h-[15%] rounded-t-xl flex items-center gap-2">
                <div className="h-[20px] w-[20px] rounded-full border-black border-2 ml-2"></div>
                <p className="font-bold text-sm">Hello There {item}</p>
              </li>

              <li className="w-full h-[15%] rounded-t-xl flex flex-row-reverse items-center gap-2">
                <div className="h-[20px] w-[20px] rounded-full border-black border-2"></div>
                <p className="font-bold text-sm">Hello There</p>
              </li>
            </span>
          ))}
        </ul>
      </div>
      <div className="row-span-1 border  flex justify-end items-center bg-white">
        <input
          type="text"
          name="message"
          id=""
          placeholder="Type message here.."
          className="col-span-3 pl-2 border w-[80%] h-[60%] focus:outline-none rounded-lg"
        />
        <Button classes="col-span-1 w-[20%] h-[60%] ">Send</Button>
      </div>
    </div>
  );
};

export default ProfileChatBox;
