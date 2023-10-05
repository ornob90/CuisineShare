import React from "react";

const Button = ({ children, classes, onClick, type, disabled, onChange }) => {
  return (
    <button
      disabled={disabled}
      type={type ? type : "submit"}
      onClick={onClick}
      onChange={onChange}
      className={`${classes} ${
        disabled
          ? ""
          : "active:scale-95 transition-all duration-[.2s] ease-in-out"
      } `}
    >
      {children}
    </button>
  );
};

export default Button;
