import React, { useContext } from "react";
import Button from "./Shared/Button";
import NavContext from "../context/NavContext";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const { menu } = useContext(NavContext);
  const navigate = useNavigate();

  return (
    <div className="bg-gray-200 bg-banner">
      <div className="max-h-[800px] h-[90vh] flex justify-center items-center md:flex-row  w-[90%] mx-auto">
        <div className="pt-[20%] md:pt-0 w-full md:w-[60%] flex flex-col justify-center md:items-left items-center gap-4">
          <div className="text-center flex flex-col justify-center items-center z-2">
            <h1 className="w-full text-4xl font-[900\] sm:text-5xl xl:text-6xl">
              Cooking <span className="text-yellow-500">Together</span>, <br />
              <span className="text-yellow-500">Sharing</span> Forever
            </h1>
            <p className=" text-center text-sm md:text-base pt-4 md:ml-0 text-gray-300 ">
              Cook, Share, Create Memories. Join a culinary community where
              every recipe is a shared forever moment
            </p>
            <div
              className={`${
                menu ? "scale-0 sm:scale-1" : "scale-1"
              } relative z-1 w-full flex justify-center  duration-[.3s]`}
            >
              <div className="z-[1] relative w-[90%] sm:w-[55%] pt-4">
                <Button classes="border border-white py-2 px-12 sm:px-14 bg-yellow-400 text-sm sm:text-base text-black font-bold ">
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center items-center w-full md:w-[40%] md:block">
          <img src="/banner2.png" alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
