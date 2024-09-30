import type { NextApiRequest, NextApiResponse } from "next";
import CAR_JSON from "../../../public/api/cars.json";
import { ResponseData } from "@/types/cars.type";


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  console.log(req.body)
  res.status(200).json(CAR_JSON);
}
