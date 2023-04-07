import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[]; // Pass the options as an array of objects with 'value' and 'label' properties
  onSelect: (selectedValue: string) => void; // Pass a callback function to handle selected value
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleOptionClick = (optionValue: string) => {
    setSelectedValue(optionValue);
    setIsOpen(false);
    onSelect(optionValue); // Call the callback function with selected value
  };

  return (
    <div className="custom-select">
      {/* eslint-disable-next-line */}
      <div className="selected-value" onClick={() => setIsOpen(!isOpen)}>
        {selectedValue || 'Select an option'}
      </div>
      {isOpen && (
        <ul className="options">
          {options.map((option) => (
            // eslint-disable-next-line
            <li key={option.value} onClick={() => handleOptionClick(option.value)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
