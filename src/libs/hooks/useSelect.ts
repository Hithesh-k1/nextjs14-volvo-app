import { useState } from "react";
import { getUniqueListBy } from "../helpers";
import { ResponseData } from "@/types/cars.type";

export const useSelect = (dataList: ResponseData) => {
  const [filteredData, setFilteredData] = useState(dataList);

  const optionsList = getUniqueListBy(dataList, "bodyType")?.map(
    ({ id, bodyType }) => ({ id, value: bodyType })
  );
  optionsList.unshift({ id: "All", value: "All" });

  const handleChangeFilter = (selectedValue: string): void => {
    const filteredCars = dataList?.filter(
      (car) => car?.bodyType === selectedValue
    );

    setFilteredData(selectedValue === "All" ? dataList : filteredCars);
  };

  return { handleChangeFilter, optionsList, filteredData };
};
