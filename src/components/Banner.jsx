import React from "react";

const Banner = () => {
  return (
    <div className="bg-gray-200 ">
      <div className="min-h-[90vh] flex  flex-col md:flex-row items-center justify-between w-[90%] mx-auto">
        <div className="text-center md:text-left pt-[20%] w-full md:w-[60%] flex flex-col gap-3">
          <h1 className="text-4xl font-bold lg:text-6xl">
            Cooking Together, <br />
            Sharing Forever
          </h1>
          <p className="mx-auto md:ml-0 text-gray-600 w-[70%]">
            Cook, Share, Create Memories. Join a culinary community where every
            recipe is a shared forever moment
          </p>
        </div>
        <div className="w-full md:w-[40%] ">
          <img
            src="https://o.remove.bg/downloads/3496bc67-1bc4-485b-a34b-9678054235e4/photo-1546069901-ba9599a7e63c-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
