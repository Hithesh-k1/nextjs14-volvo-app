import { fetchApi } from "../../libs/services/fetchApi";
import { CarsList } from "./CarsList.client";
import CARS from "../../../public/api/cars.json";
import { ResponseData } from "@/types/cars.type";

export default async function CarsListRSC() {
  const response = CARS;
  // const response: ResponseData = await fetchApi("http://localhost:3000/api/carDetails");
  return <CarsList response={response} />;
}
