import React from "react";

const ProfileAbout = () => {
  return (
    <div className="my-10 w-[80%] mx-auto">
      <h3 className="mb-5 font-semibold text-lg">Bio</h3>
      <input
        type="text"
        placeholder="Bio"
        className="input input-bordered w-full max-w-xs"
      />
      <h3 className="my-5 font-semibold text-lg">Address</h3>
      <input
        type="text"
        placeholder="Address"
        className=" input input-bordered w-full max-w-xs"
      />
    </div>
  );
};

export default ProfileAbout;
