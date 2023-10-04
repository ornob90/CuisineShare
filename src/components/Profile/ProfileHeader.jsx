import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Shared/Button";
import PostForm from "./PostForm";

const ProfileHeader = () => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <div className="w-full h-[250px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <div className="mt-[-15%] sm:mt-[-5%] md:items-end flex flex-col justify-center items-center md:grid md:grid-cols-4 lg:grid-cols-5 w-[80%] mx-auto">
        <img
          src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1385&q=80"
          alt=""
          className="object-cover rounded-full w-[150px] h-[150px] col-span-1"
        />

        <div className="col-span-3 ">
          <h1 className="text-3xl font-bold">Kazi Towfiq</h1>
          <p className="text-sm">Lorem ipsum dolor sit.</p>
        </div>
        <div className="flex items-center gap-5 text-lg font-bold">
          <NavLink
            to="/profile/profile-about"
            className="duration-300 active:scale-95"
          >
            About
          </NavLink>
          <NavLink to="/profile" className="duration-300 active:scale-95">
            Posts
          </NavLink>
          <Button
            classes="bg-black text-white text-base px-3 py-1 rounded-lg"
            onClick={handleModal}
          >
            Upload
          </Button>
        </div>
      </div>
      <div
        className={`absolute top-0 left-0 flex items-center justify-center w-[95vw] min-h-screen mt-28 lg:-mt-10 lg:h-[80vh] bg-transparent   ${
          modal ? "scale-1" : "scale-0"
        }`}
      >
        <div
          className={`w-[80%] lg:w-[50%]  bg-gray-200 ${
            modal ? "scale-1" : "scale-0"
          } duration-[.4s] flex justify-center items-center py-10 rounded-2xl`}
        >
          <PostForm handleModal={handleModal} />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
