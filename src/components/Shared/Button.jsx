import React from "react";

const Button = ({ children, classes, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${classes} active:scale-95 transition-all duration-[.2s] ease-in-out`}
    >
      {children}
    </button>
  );
};

export default Button;
