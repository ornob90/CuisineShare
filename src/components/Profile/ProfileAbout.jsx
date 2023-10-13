import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { BiEdit, BiSave } from "react-icons/bi";
import Button from "../Shared/Button";
import useDb from "../../hooks/useDb";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../FireStore/firestore.config";
import { async } from "@firebase/util";
import useAuth from "../../hooks/useAuth";

const ProfileAbout = () => {
  const { id } = useOutletContext();
  const { users } = useDb();
  const { user } = useAuth();

  const [editable, setEditable] = useState(false);
  const [bio, setBio] = useState(users[id]?.bio);
  const [phoneNum, setPhoneNum] = useState(users[id]?.address);
  const [address, setAddress] = useState(users[id]?.phone);

  const handleUpdateUser = async () => {
    setEditable(!editable);
    const userDoc = doc(db, "users", id);

    if (
      users[id]?.address === address &&
      users[id]?.bio === bio &&
      users[id]?.phone === phoneNum
    ) {
      return;
    }
    const updatedData = {
      bio,
      address,
      phone: phoneNum,
    };
    await updateDoc(userDoc, updatedData);
  };

  return (
    <div className="my-10 w-[80%] mx-auto grid grid-cols-3 gap-2">
      <div
        className={`col-span-3  ${
          users[id]?.email === user?.email ? "flex" : "hidden"
        } justify-end items-center text-[32px] mb-6 `}
      >
        <Button>
          {editable ? (
            <BiSave onClick={handleUpdateUser} />
          ) : (
            <BiEdit onClick={() => setEditable(!editable)} />
          )}
        </Button>
      </div>
      <div className="col-span-2">
        <h3 className="mb-5 text-lg font-semibold">Bio</h3>
        <textarea
          className="focus:bg-gray-200 lg:col-span-3 border border-gray-300 focus:outline-none textarea textarea-ghost w-full"
          rows={3}
          placeholder="Bio"
          name="steps"
          required
          readOnly={!editable}
          onChange={(e) => setBio(e.target.value)}
          value={bio}
        ></textarea>
      </div>

      <div className="col-span-1 ">
        <h3 className="mb-5 text-lg font-semibold">Phone Number</h3>
        <div>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            readOnly={!editable}
            onChange={(e) => setPhoneNum(e.target.value)}
            value={phoneNum}
          />
        </div>
      </div>

      <div className="col-span-3">
        <h3 className="my-5 text-lg font-semibold">Address</h3>
        <textarea
          className="focus:bg-gray-200 lg:col-span-3 border border-gray-300 focus:outline-none textarea textarea-ghost w-full"
          rows={2}
          placeholder="Address"
          name="steps"
          required
          readOnly={!editable}
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        ></textarea>
      </div>
    </div>
  );
};

export default ProfileAbout;
