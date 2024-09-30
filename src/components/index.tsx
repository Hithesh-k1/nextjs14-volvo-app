import React from "react";
import CarsList from "./CarsList/CarsList.server";

export const RootComponent = () => {
  return (
    <>
      <h1 className="heading-1 py-24 px-16">Volvo Cars (Global Online Digital)</h1>
      <CarsList />
    </>
  );
};
