import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { BiEdit, BiSave } from "react-icons/bi";
import Button from "../Shared/Button";

const ProfileAbout = () => {
  const { id } = useOutletContext();
  const [editable, setEditable] = useState(false);

  return (
    <div className="my-10 w-[80%] mx-auto grid grid-cols-3 gap-2">
      <div className="col-span-3 flex justify-end items-center text-[32px] mb-6">
        <Button>
          {!editable ? (
            <BiSave onClick={() => setEditable(!editable)} />
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
          readOnly={editable}
        ></textarea>
      </div>

      <div className="col-span-1 ">
        <h3 className="mb-5 text-lg font-semibold">Phone Number</h3>
        <div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            readOnly={editable}
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
          readOnly={editable}
        ></textarea>
      </div>
    </div>
  );
};

export default ProfileAbout;
