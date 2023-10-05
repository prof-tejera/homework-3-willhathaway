import "./RadioBtn.css";

import React, {useState} from "react";

const RadioBtn = ({ name }) => {
  const [selected, setSelected] = useState(false);

  const handleToggle = () => {
    setSelected((prevSelected) => !prevSelected);
  };

  return (
    <div className="radio-button-container" onClick={handleToggle}>
      <label>{name}</label>
      <input
        type="radio"
        name={name}
        checked={selected}
        onChange={handleToggle}
      />
    </div>
  );
};

export default RadioBtn;
