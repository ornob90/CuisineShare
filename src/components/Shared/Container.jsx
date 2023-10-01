import React from "react";

const Container = ({ children, nav }) => {
  return (
    <div
      className={`${
        nav ? "shadow-[0_0_5px_rgba(0,0,0,0.3)]" : ""
      } max-w-[1440px] mx-auto w-[90%] mt-[5%] h-max`}
    >
      {children}
    </div>
  );
};

export default Container;
