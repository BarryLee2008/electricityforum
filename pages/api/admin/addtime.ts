import { NextApiRequest, NextApiResponse } from "next";

import AppDataSource from "db/data-source";

import { Course, Time } from "db/enetity";

const addTime = async (req: NextApiRequest, res: NextApiResponse) => {
  const { course_id = "", time_zone = "", available = "" } = req.body;
  if (
    course_id.length === 0 ||
    time_zone.length === 0 ||
    available.length === 0
  ) {
    return res.status(401).json({
      message: "No Info Received",
    });
  }
  try {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
    }
  } catch (error) {
    return res.status(500).json({
      message: "Failed to connect",
    });
  }
  const courseRepo = AppDataSource.getRepository(Course);
  const timeRepo = AppDataSource.getRepository(Time);
  let currentCourse = await courseRepo.findOne({
    where: {
      id: course_id,
    },
    relations: {
      available_time: true,
    },
  });
  if (!currentCourse) {
    return res.status(403).json({
      message: "No course found",
    });
  }
  let newTime = new Time();
  newTime.course = currentCourse;
  newTime.time_zone = time_zone;
  newTime.available = available;
  await timeRepo.manager.save(newTime);

  res.status(200).json({
    message: "Time added",
  });
};

export default addTime;
