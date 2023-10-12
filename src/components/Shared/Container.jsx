import React from "react";

const Container = ({ children, auth }) => {
  return (
    <div
      className={` relative max-w-[1440px] mx-auto ${
        auth ? "mt-0" : "mt-[5%]"
      } `}
    >
      {children}
    </div>
  );
};

export default Container;
