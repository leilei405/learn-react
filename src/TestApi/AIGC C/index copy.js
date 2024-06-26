import React, { useState, useEffect } from "react";

const CustomInput = (props) => {
  const {
    value,
    defaultValue,
    onChange = () => {},
    maxLength,
    ...otherProps
  } = props || {};

  const [internalValue, setInternalValue] = useState(defaultValue || "");

  const handleChange = (event) => {
    const { target: { value: newValue = "" } = {} } = event;
    if (maxLength && newValue.length > maxLength) return;
    setInternalValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="custom-input">
      <input
        type="text"
        value={internalValue}
        onChange={handleChange}
        {...otherProps}
      />
      {internalValue && (
        <div className="length-indicator">
          {internalValue.length}/{maxLength}
        </div>
      )}
    </div>
  );
};

const TagComs = () => {
  return (
    <div>
      <CustomInput maxLength={10} defaultValue={"hello"} />
    </div>
  );
};

export default TagComs;
