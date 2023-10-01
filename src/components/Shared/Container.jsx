import React from "react";

const Container = ({ children }) => {
  return (
    <div className={`max-w-[1440px] mx-auto w-[90%] mt-[5%]`}>{children}</div>
  );
};

export default Container;
