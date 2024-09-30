import React from "react";
import { upperCase } from "@/libs/helpers";
import ImageComponent from "@/components/common/ImageComponent";
import { CarModels } from "@/types/cars.type";

export const CarsCard = ({ carItems }:{carItems:CarModels}) => {
  return (
    <div
      className="flex-col flex-shrink-0 flex-grow-0 h-full snap-start"
      key={carItems.id}
    >
      <div className="px-16 pt-16">
      <p className="font-14 font-medium text-secondary">
        {upperCase(carItems.bodyType)}
      </p>
      <div className="flex-col md:flex-row md:gap-8">
        <p className="font-20 font-medium ">
          {carItems.modelName}
        </p>
        <p className="font-16 text-secondary">{carItems.modelType}</p>
      </div>

      </div>
   
        <ImageComponent
          alt={carItems.modelName}
          className="hover:scale-zoomed h-full transition-transform p-16"
          src={carItems.imageUrl}
        />

      <div className="flex-row justify-center align-center gap-32">
        <button
          aria-label={`Learn more on ${carItems.modelName} ${carItems.modelType}`}
          className="font-16 font-medium button-text text-accent-blue"
        >
          LEARN
        </button>

        <button
          aria-label={`Shop now  ${carItems.modelName} ${carItems.modelType}`}
          className="font-16 font-medium button-text text-accent-blue"
        >
          SHOP
        </button>
      </div>
    </div>
  );
};
