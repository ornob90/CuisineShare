import React from "react";
import { NavLink } from "react-router-dom";

const ProfileHeader = () => {
  return (
    <div>
      <div className="w-full h-[250px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-[-15%] sm:mt-[-5%] md:items-end flex flex-col justify-center items-center md:grid md:grid-cols-4 lg:grid-cols-5 w-[80%] mx-auto">
        <img
          src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1385&q=80"
          alt=""
          className="object-cover rounded-full w-[150px] h-[150px] col-span-1"
        />

        <div className=" col-span-3">
          <h1 className="text-3xl font-bold">Kazi Towfiq</h1>
          <p className="text-sm">Lorem ipsum dolor sit.</p>
        </div>
        <div className="text-lg flex gap-5 font-bold">
          <NavLink
            to="/profile/profile-about"
            className="active:scale-95 duration-300"
          >
            About
          </NavLink>
          <NavLink to="/profile" className="active:scale-95 duration-300">
            Posts
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
