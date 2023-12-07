import { NextApiRequest, NextApiResponse } from "next";

import { Catagory } from "db/enetity";
import AppDataSource from "db/data-source";

const getCatagory = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }

  const response = await AppDataSource.getRepository(Catagory).find({
    relations: {
      courses: true,
    },
  });

  res.status(200).json({
    message: "successfully received",
    data: response,
  });
};
export default getCatagory;
