import React from "react";
import Container from "./Shared/Container";
import { NavLink } from "react-router-dom";
import Button from "./Shared/Button";
import { HiMenuAlt3 } from "react-icons/hi";

const NavBar = () => {
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
      <nav className="fixed top-0 grid w-[90%] grid-cols-2 lg:grid-cols-3 pt-4">
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
          <HiMenuAlt3 className="block lg:hidden" />
        </div>
        <ul className="hidden">{navLinks}</ul>
      </nav>
    </Container>
  );
};

export default NavBar;
