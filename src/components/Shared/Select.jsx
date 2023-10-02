import React from "react";

const Select = ({ name, options }) => {
  return (
    <div>
      <select className="w-full max-w-xs border-none select select-primary focus:outline-none">
        <option defaultValue>{name}</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
