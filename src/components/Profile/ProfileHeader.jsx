import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Shared/Button";
import PostForm from "./PostForm";
import useAuth from "../../hooks/useAuth";
import useDb from "../../hooks/useDb";

import { IoMdAddCircle } from "react-icons/io";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../FireStore/firestore.config";

const ProfileHeader = ({ id, chatBoxOpen, setChatBoxOpen }) => {
  const [modal, setModal] = useState(false);
  const [imgUrl, setImgUrl] = useState(null);
  const [uploadDisabled, setUploadDisabled] = useState(true);

  const { user } = useAuth();
  const { users } = useDb();

  // console.log(users[id]?.email, user?.email);

  const handleModal = () => {
    setModal(!modal);
  };
  // console.log(users[id]?.email, user?.email);

  const handleImageUpload = async (e) => {
    const imageFile = e.target.files[0];
    const userEmail = user?.email.replace(/[\W_]/g, "");
    const imageRef = ref(storage, `dp/${userEmail}+${v4()}`);

    const snapshot = await uploadBytes(imageRef, imageFile);

    const url = await getDownloadURL(snapshot.ref);
    setImgUrl(url);

    await setTimeout(() => setUploadDisabled(false), 250);
  };

  const handleUpdateImageUrlToDB = async () => {
    if (!imgUrl) return;

    const userDoc = doc(db, "users", id);

    const updatedData = {
      imagePath: imgUrl,
    };

    await updateDoc(userDoc, updatedData);
  };

  return (
    <div>
      <div className="w-full h-[250px] overflow-hidden z-[2]">
        <img
          src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="object-cover w-full h-full z-[2]"
        />
      </div>

      <div className="mt-[-15%] sm:mt-[-5%] md:items-end flex flex-col justify-center  items-center md:grid md:grid-cols-5 lg:grid-cols-5 w-[80%] mx-auto gap-4 md:gap-0">
        <div className="w-[150px] h-[150px] rounded-full relative">
          <img
            src={
              users[id]?.imagePath
                ? users[id]?.imagePath
                : `https://beforeigosolutions.com/wp-content/uploads/2021/12/dummy-profile-pic-300x300-1.png`
            }
            alt=""
            className="object-cover rounded-full col-span-1 w-full h-full"
          />

          <IoMdAddCircle
            onClick={() => {
              document.getElementById("my_modal_1").showModal();
              setUploadDisabled(true);
            }}
            className="bg-black rounded-full text-white text-3xl absolute bottom-[3%] right-[5%]"
          />

          <dialog id="my_modal_1" className="modal w-[90%]">
            <div className="modal-box flex flex-col gap-4 justify-center ">
              <label className="text-xl font-bold file:label  font-sans">
                Update Profile Picture
              </label>
              <input
                name="image"
                type="file"
                className="col-span-2 file:font-sans file:text-sm file:font-medium w-full max-w-xs text-sm font-sans focus:outline-none"
                onChange={handleImageUpload}
              />
              <div className="modal-action w-full flex justify-end">
                <form method="dialog">
                  <Button
                    classes={` bg-black text-white hover:bg-black hover:text-white py-2 px-3 rounded-lg`}
                  >
                    Close
                  </Button>
                  <Button
                    classes={` bg-black text-white hover:bg-black hover:text-white py-2 px-3 rounded-lg ml-2 ${
                      uploadDisabled ? "bg-gray-400 hover:bg-gray-400" : ""
                    }`}
                    disabled={uploadDisabled}
                    onClick={handleUpdateImageUrlToDB}
                  >
                    Upload
                  </Button>
                </form>
              </div>
            </div>
          </dialog>
        </div>

        <div className="col-span-2  ">
          <h1 className="text-3xl font-bold">{users[id]?.userName}</h1>
          <p className="text-sm">Lorem ipsum dolor sit.</p>
        </div>

        <div
          className={`flex items-center justify-end gap-5 text-lg font-bold  col-span-2 ${
            chatBoxOpen ? "" : ""
          }`}
        >
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

          {users[id]?.email !== user?.email ? (
            <Button
              onClick={() => setChatBoxOpen(!chatBoxOpen)}
              classes="px-3 py-1 text-base  text-white  bg-yellow-500 rounded-lg"
            >
              Message
            </Button>
          ) : (
            ""
          )}
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
    </div>
  );
};

export default ProfileHeader;
