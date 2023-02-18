import React, { useState } from "react";
import { options } from "./options";
import "./App.css";

const DropdownMenu = ({ value, options, onChange }) => {
  return (
    <select value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

const DisplayedOption = ({ option }) => {
  return <div style={{ marginTop: 20 }}>Selected option: {option.label}</div>;
};

const SelectDropdown = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelectChange = (event) => {
    const value = event.target.value;
    const option = options.find((option) => option.value === value);
    setSelectedOption(option);
  };

  return (
    <div className="App">
      <DropdownMenu
        value={selectedOption.value}
        options={options}
        onChange={handleSelectChange}
      />
      <DisplayedOption option={selectedOption} />
    </div>
  );
};

export default SelectDropdown;
