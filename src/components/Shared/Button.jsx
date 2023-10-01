import React from "react";

const Button = ({ children, classes }) => {
  return (
    <button
      className={`${classes} active:scale-95 transition-all duration-[.2s] ease-in-out`}
    >
      {children}
    </button>
  );
};

export default Button;
