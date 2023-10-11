import React from "react";

const Select = ({ name, options, category, handleSelectedOption }) => {
  // console.log(options);
  return (
    <div className="h-[100px]">
      <select
        className="max-h-[50px]  w-full max-w-xs border-none select select-primary focus:outline-none overflow-auto"
        value={category}
        onChange={handleSelectedOption}
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
