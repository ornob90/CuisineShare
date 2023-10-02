import React from "react";

const Container = ({ children }) => {
  return (
    <div className={`relative max-w-[1440px] mx-auto mt-[5%]`}>{children}</div>
  );
};

export default Container;
