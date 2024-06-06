import React, { useState, useEffect } from "react";

const CustomInput = ({
  value,
  defaultValue,
  onChange,
  maxLength,
  ...otherProps
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue || "");
  const isControlled = value !== undefined;

  useEffect(() => {
    if (!isControlled && value !== undefined && value !== internalValue) {
      setInternalValue(value);
    }
  }, [value, isControlled]);

  const handleChange = (event) => {
    const {
      target: { value: newValue },
    } = event;
    if (maxLength && newValue.length > maxLength) {
      return;
    }
    if (isControlled) {
      onChange(newValue);
    } else {
      setInternalValue(newValue);
      onChange?.(newValue);
    }
  };

  return (
    <div className="custom-input">
      <input
        type="text"
        value={isControlled ? value : internalValue}
        onChange={handleChange}
        {...otherProps}
      />
      {maxLength && (
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
