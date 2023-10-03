import React from "react";

const ProfileAbout = () => {
  return (
    <div className="my-10 w-[80%] mx-auto">
      <h3 className="mb-5 font-semibold text-lg">Bio</h3>
      <textarea
        className="textarea textarea-bordered border-black"
        placeholder="Bio"
        rows={5}
        cols={70}
      ></textarea>
      <h3 className="mb-5 font-semibold text-lg">Address</h3>
      <textarea
        className="textarea textarea-bordered border-black"
        placeholder="Address"
        rows={1}
        cols={70}
      ></textarea>
    </div>
  );
};

export default ProfileAbout;
