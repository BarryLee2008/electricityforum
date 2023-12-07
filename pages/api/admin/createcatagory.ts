import { NextApiRequest, NextApiResponse } from "next";

import { Catagory } from "db/enetity/index";
import AppDataSource from "db/data-source";

const addCatagory = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title = "" } = req.body;
  if (title.length === 0) {
    return res.status(401).json({
      message: "No info received",
    });
  }

  try {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
    }
  } catch (error) {
    return res.status(500).json({
      message: "Unknown Error",
    });
  }

  const courseRepo = AppDataSource.getRepository(Catagory);

  let newCatagory = new Catagory();

  newCatagory.title = title;

  try {
    const response = await courseRepo.manager.save(newCatagory);
    return res.status(200).json({
      message: "Added a new catagory",
      data: response,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "unkown error too",
    });
  }
};

export default addCatagory;
