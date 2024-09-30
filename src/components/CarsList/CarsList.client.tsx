"use client";

import React, { useEffect, useState } from "react";
import { CarsCard } from "@/components/CarsCard";
import ReelsComponent from "@/components/common/ReelsComponent";
import { useSelect } from "@/libs/hooks/useSelect";
import SelectComponent from "@/components/common/SelectComponent";
import { CarModels, ResponseData } from "@/types/cars.type";

export const CarsList = ({ response }: { response: ResponseData }) => {
  const [cars, setCars] = useState(response);
  const { handleChangeFilter, optionsList, filteredData } = useSelect(response);

  useEffect(() => {
    setCars(filteredData);
  }, [filteredData]);

  return (
    <>
      <div className="flex justify-start w-1/2 px-16">
        <SelectComponent
          handleChangeFilter={handleChangeFilter}
          optionsList={optionsList}
        />
      </div>
      <ReelsComponent>
        {cars?.map((car: CarModels) => (
          // eslint-disable-next-line react/jsx-key
          <CarsCard carItems={car} />
        ))}
      </ReelsComponent>
    </>
  );
};
