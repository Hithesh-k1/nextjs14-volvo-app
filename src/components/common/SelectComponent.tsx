import { Select } from "@volvo-cars/react-forms";
import React from "react";

type SelectComponentProps = {
  handleChangeFilter: (params: string) => void;
  optionsList: { id: string; value: string }[];
};

const SelectComponent = ({
  handleChangeFilter,
  optionsList,
}: SelectComponentProps) => {
  return (
    <Select
      label="Select a car model"
      name="Car model"
      onChange={(e) => handleChangeFilter(e?.target?.value)}
    >
      {optionsList?.map(({ id, value }) => (
        <option key={id} value={value}>
          {value}
        </option>
      ))}
    </Select>
  );
};

export default SelectComponent;
