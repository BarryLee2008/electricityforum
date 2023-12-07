import { NextApiRequest, NextApiResponse } from "next";

import AppDataSource from "db/data-source";

import { Course } from "db/enetity";

const updatecoursecontent = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const {
    course_id = "",
    catagory_id = "",
    title = "",
    description = "",
  } = req.body;
  //console.log(course_id);
  if (course_id.length === 0) {
    return res.status(401).json({
      message: "No course ID received",
    });
  }
  if (catagory_id != 0) {
    return res.status(401).json({
      message: "catagory should not be passed",
    });
  }
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }

  const courseRepo = AppDataSource.getRepository(Course);

  let currentCourse = await courseRepo.findOne({
    where: {
      id: course_id,
    },
    relations: {
      catagory: true,
    },
  });

  if (!currentCourse) {
    return res.status(401).json({
      message: "course not found",
    });
  }
  currentCourse.description = description
    ? description
    : currentCourse.description;
  currentCourse.title = title ? title : currentCourse.title;

  await courseRepo.manager.save(currentCourse);

  res.status(200).json({
    message: "updated successfully",
  });
};

export default updatecoursecontent;
