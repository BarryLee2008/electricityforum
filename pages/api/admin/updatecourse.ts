import { NextApiRequest, NextApiResponse } from "next";

import AppDataSource from "db/data-source";

import { Course, Catagory } from "db/enetity";

const updatecourse = async (req: NextApiRequest, res: NextApiResponse) => {
  const { catagory_id = "", course_id = "" } = req.body;
  //console.log(course_id);
  if (course_id.length === 0 || catagory_id === 0) {
    return res.status(401).json({
      message: "No course ID received",
    });
  }
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }

  const courseRepo = AppDataSource.getRepository(Course);
  const catagoryRepo = AppDataSource.getRepository(Catagory);

  let currentCourse = await courseRepo.findOne({
    where: {
      id: course_id,
    },
    relations: {
      catagory: true,
    },
  });

  let currentCatagory = await catagoryRepo.findOne({
    where: {
      id: catagory_id,
    },
    relations: {
      courses: true,
    },
  });

  if (!currentCatagory) {
    return res.status(401).json({
      message: "catagory not found",
    });
  }

  if (!currentCourse) {
    return res.status(401).json({
      message: "course not found",
    });
  }

  currentCourse.catagory = currentCatagory;
  await courseRepo.manager.save(currentCourse);

  res.status(200).json({
    message: "add new catagory",
  });
};

export default updatecourse;
