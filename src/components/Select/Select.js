import React from "react";
import { withTheme } from "styled-components";

import Select from "react-select";

const defaultOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const getCustomStyles = (
  theme,
  accentColor = `#22b0fc`,
  bg = `#fff`,
  border,
  indicator
) => {
  return {
    dropdownIndicator: () => {
      return {
        display: !indicator ? "block" : "none",
      };
    },
    indicatorSeparator: () => {},
    option: (provided, state) => {
      return {
        ...provided,
        color: state.isSelected ? accentColor : `#121212`,
        textAlign: "left",
        backgroundColor: bg,
      };
    },
    control: (provided, state) => {
      return {
        ...provided,
        border: !border
          ? "none"
          : state.menuIsOpen || state.isFocused
          ? `1px solid ${accentColor} !important`
          : `1px solid #ddd !important`,
        borderRadius: 10,
        padding: "0.25rem 1rem",
        width: "100%",
        height: "45px",
        outline: "none",
        boxShadow: "none",
        textAlign: "left",
        backgroundColor: bg,
      };
    },
  };
};

const SelectStyled = ({
  theme,
  name = "item",
  options = defaultOptions,
  ...rest
}) => {
  return (
    <Select
      styles={getCustomStyles(theme)}
      defaultValue={options[1]}
      instanceId="uniqueId"
      name={name}
      options={options}
      {...rest}
    />
  );
};

export default withTheme(SelectStyled);
