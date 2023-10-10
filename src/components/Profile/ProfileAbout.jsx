import React from "react";
import { useOutletContext } from "react-router-dom";

const ProfileAbout = () => {
  const { hello } = useOutletContext();
  console.log(hello);
  return (
    <div className="my-10 w-[80%] mx-auto">
      <h3 className="mb-5 text-lg font-semibold">Bio</h3>
      <input
        type="text"
        placeholder="Bio"
        className="w-full max-w-xs input input-bordered"
      />
      <h3 className="my-5 text-lg font-semibold">Address</h3>
      <input
        type="text"
        placeholder="Address"
        className="w-full max-w-xs input input-bordered"
      />
    </div>
  );
};

export default ProfileAbout;
