import React, { useState } from 'react';


const RadioButtonGroup = ({ onChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  let options = ["One", "Two", "Three"]


  const handleOptionChange = (option) => {
    setSelectedOption(option);
    if(onChange) {
      onChange(option);
    }
  };

  return (
    <div className="radio-button-group">
      {options.map((option, index) => (
        <div key={index} className="radio-option">
          <input 
            type="radio" 
            id={option}
            name="customRadioGroup" 
            value={option}
            checked={selectedOption === option} 
            onChange={() => handleOptionChange(option)}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default RadioButtonGroup;
