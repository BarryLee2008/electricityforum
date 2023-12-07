import { NextApiRequest, NextApiResponse } from "next";

import { Course } from "db/enetity/index";
import AppDataSource from "db/data-source";

const addCourse = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title = "", description = "", type = "" } = req.body;
  if (title.length === 0 || description.length === 0 || type.length === 0) {
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

  const courseRepo = AppDataSource.getRepository(Course);

  let newCourse = new Course();

  newCourse.description = description;
  newCourse.title = title;
  newCourse.type = type;

  try {
    const response = await courseRepo.manager.save(newCourse);
    return res.status(200).json({
      message: "Added a new course",
      data: response,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "unkown error too",
    });
  }
};

export default addCourse;
