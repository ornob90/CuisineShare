import React from "react";

const Select = ({ name, options, value, handleSelectedOption }) => {
  // console.log(options);
  console.log("value", value);
  return (
    <div className="">
      <select
        className="w-full max-w-xs border-none select select-primary focus:outline-none overflow-auto"
        onChange={handleSelectedOption}
        value={value}
      >
        <option defaultValue>{name}</option>
        {options?.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
