import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Shared/Button";
import PostForm from "./PostForm";
import useAuth from "../../hooks/useAuth";
import useDb from "../../hooks/useDb";
import { GrFormClose } from "react-icons/gr";

const ProfileHeader = ({ id }) => {
  const [modal, setModal] = useState(false);
  const [chatBoxOpen, setChatBoxOpen] = useState(true);

  const { user } = useAuth();
  const { users } = useDb();

  // console.log(users, user.email);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <div className="w-full h-[250px] overflow-hidden ">
        <img
          src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <div className="mt-[-15%] sm:mt-[-5%] md:items-end flex flex-col justify-center items-center md:grid md:grid-cols-5 lg:grid-cols-5 w-[80%] mx-auto  ">
        <img
          src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1385&q=80"
          alt=""
          className="object-cover rounded-full w-[150px] h-[150px] col-span-1"
        />

        <div className="col-span-2  ">
          <h1 className="text-3xl font-bold">{users[id]?.userName}</h1>
          <p className="text-sm">Lorem ipsum dolor sit.</p>
        </div>

        <div className="flex items-center justify-end gap-5 text-lg font-bold  col-span-2  ">
          <NavLink
            to={`/profile/${id}/profile-about`}
            className={({ isActive }) =>
              `duration-300 active:scale-95 ${
                isActive ? "-b-2 -yellow-500" : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to={`/profile/${id}/posts`}
            className={({ isActive }) =>
              `duration-300 active:scale-95 ${
                isActive ? "-b-2 -yellow-500" : ""
              }`
            }
          >
            Posts
          </NavLink>
          <Button
            onClick={() => setChatBoxOpen(!chatBoxOpen)}
            classes="px-3 py-1 text-base  text-white  bg-yellow-500 rounded-lg"
          >
            Message
          </Button>

          {users[id]?.email === user?.email ? (
            <Button
              classes="bg-black text-white text-base px-3 py-1 rounded-lg"
              onClick={handleModal}
            >
              Upload
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
      <div
        className={`absolute top-0 left-0 flex items-center justify-center w-[95vw] min-h-screen mt-28 lg:-mt-10 lg:h-[80vh] bg-transparent   ${
          modal ? "scale-1" : "scale-0"
        } `}
      >
        <div
          className={`w-[80%] lg:w-[50%] bg-gray-200 ${
            modal ? "scale-1" : "scale-0"
          } duration-[.4s] flex justify-center items-center px-4 py-10 rounded-2xl`}
        >
          <PostForm handleModal={handleModal} />
        </div>
      </div>

      {/* Chat Box */}
      <div
        className={`w-[30%] h-[60%] shadow-lg rounded-xl fixed bottom-0 right-[20%] bg-white z-10 duration-[.3s] ${
          chatBoxOpen ? "bottom-0 right-[10%]" : "right-[-100%] duration-300"
        } grid grid-cols-1 grid-rows-6`}
      >
        <div className="row-span-5 border rounded-t-xl">
          <div className="w-full h-[15%] bg-yellow-400 rounded-t-xl flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="h-[40px] w-[40px] rounded-full border-black border-2 ml-2"></div>
              <p className="font-bold">Kazi Towfiq</p>
            </div>

            <p className="text-3xl ">
              <GrFormClose
                onClick={() => setChatBoxOpen(false)}
                className="duration-[.3s]"
              />
            </p>
          </div>

          <ul className="space-y-2 mt-4 h-[80%] overflow-auto pr-2">
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
    </div>
  );
};

export default ProfileHeader;
