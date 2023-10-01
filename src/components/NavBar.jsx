import React, { useState } from "react";
import Container from "./Shared/Container";
import { NavLink } from "react-router-dom";
import Button from "./Shared/Button";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const NavBar = () => {
  const [menu, setMenu] = useState(true);

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-yellow-500 border-b-[2px] border-b-yellow-500" : ""
        }
      >
        <Button>Home</Button>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-yellow-500 border-b-[2px] border-b-yellow-500" : ""
        }
        to="/about"
      >
        <Button>About</Button>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-yellow-500 border-b-[2px] border-b-yellow-500" : ""
        }
        to="/news-feed"
      >
        <Button>NewsFeed</Button>
      </NavLink>
    </>
  );
  return (
    <Container>
      <nav className="z-[5] fixed top-0 grid w-[90%] grid-cols-2 lg:grid-cols-3 pt-4">
        <div className="">
          <img
            className="w-[65%] sm:w-[50%] md:w-[40%] lg:w-[30%]"
            src="/logo.png"
            alt=""
          />
        </div>
        <div className="items-center hidden text-xl font-medium lg:flex justify-evenly">
          {" "}
          {navLinks}{" "}
        </div>
        <div className="flex items-center justify-end gap-6">
          <div className="h-[40px] w-[40px] rounded-full border-black border-2"></div>

          <Button classes="px-2 py-1 md:px-3 md:py-2 text-sm md:text-base md:font-medium text-white  bg-yellow-500 rounded-full hidden md:block">
            Sign Out
          </Button>
          <HiMenuAlt3
            onClick={() => setMenu(!menu)}
            className="block text-3xl lg:hidden"
          />
        </div>
        <ul
          className={`pr-[5%] absolute top-0 ${
            menu ? "right-[-10%]" : "-right-[110%] md:-right-[100%]"
          } bg-gray-300 z-[10] w-full sm:w-[60%] md:w-[40%] h-screen flex flex-col pt-10 items-center lg:hidden gap-8 text-xl md:text-2xl font-medium duration-500`}
        >
          <li className="w-[80%] mb-10 text-3xl flex justify-between md:justify-end items-center">
            <Button classes="px-3 py-2 text-base  md:hidden text-white  bg-yellow-500 rounded-full  block z-[25]">
              Sign Out
            </Button>
            <AiOutlineCloseCircle onClick={() => setMenu(!menu)} className="" />
          </li>
          {navLinks}
        </ul>
      </nav>
    </Container>
  );
};

export default NavBar;
