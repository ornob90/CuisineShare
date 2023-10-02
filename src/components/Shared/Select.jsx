import React from "react";

const Select = ({ name, options }) => {
  return (
    <div>
      <select className="select select-primary w-full max-w-xs border-none focus:outline-none">
        <option selected>{name}</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
