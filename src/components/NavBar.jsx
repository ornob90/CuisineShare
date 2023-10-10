import React, { useContext, useEffect, useState } from "react";
import Container from "./Shared/Container";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "./Shared/Button";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import NavContext from "../context/NavContext";
import useAuth from "../hooks/useAuth";
import PrivateRoute from "../routes/PrivateRoute";
import useDb from "../hooks/useDb";

const NavBar = ({ users }) => {
  const { menu, handleMenu } = useContext(NavContext);
  const [curUserId, setCurUserId] = useState(null);
  const navigate = useNavigate();
  const { user, signOutMethod } = useAuth();

  useEffect(() => {
    if (users) {
      setCurUserId(
        Object.keys(users).find((id) => {
          // console.log(id);
          return users[id].email === user.email;
        })
      );
    }
    // console.log(users);
  }, [users]);

  // console.log(curUserId);

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
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-yellow-500 border-b-[2px] border-b-yellow-500" : ""
        }
        to="/favorites"
      >
        <Button>Favorites</Button>
      </NavLink>
    </>
  );
  return (
    <PrivateRoute>
      <Container>
        <div className="max-w-[1440px] relative z-[10]">
          <div className="bg-gray-200  w-full fixed top-0 left-0 flex justify-center pb-3 shadow-[0_0_5px_rgba(0,0,0,0.15)]">
            <nav className="grid w-[90%] grid-cols-2 lg:grid-cols-3 pt-4">
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
                <div
                  onClick={() => navigate(`/profile/${curUserId}`)}
                  className="h-[40px] w-[40px] rounded-full border-black border-2"
                ></div>

                <Button
                  onClick={() => signOutMethod()}
                  classes="px-2 py-1 md:px-3 md:py-2 text-sm md:text-base md:font-medium text-white  bg-yellow-500 rounded-full hidden md:block"
                >
                  Sign Out
                </Button>
                <HiMenuAlt3
                  onClick={handleMenu}
                  className="block text-3xl lg:hidden"
                />
              </div>
              <ul
                className={` z-[100] pr-[5%] absolute top-0 ${
                  menu ? "right-[-5%]" : "-right-[110%] md:-right-[100%]"
                } bg-gray-300 z- w-full sm:w-[60%] md:w-[40%] h-screen flex flex-col pt-10 items-center lg:hidden gap-8 text-xl md:text-2xl font-medium duration-500`}
              >
                <li className="relative z-10 w-[80%] mb-10 text-3xl flex justify-between md:justify-end items-center">
                  <Button classes="px-3 py-2 text-base  md:hidden text-white  bg-yellow-500 rounded-full  block z-[25]">
                    Sign Out
                  </Button>
                  <AiOutlineCloseCircle onClick={handleMenu} className="" />
                </li>
                {navLinks}
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    </PrivateRoute>
  );
};

export default NavBar;
