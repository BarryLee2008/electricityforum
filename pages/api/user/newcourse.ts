import { NextApiResponse, NextApiRequest } from "next";

import AppDataSource from "db/data-source";
import { User, Course } from "db/enetity";
import { verifyJWT } from "utils/jwt";

const newCourse = async (req: NextApiRequest, res: NextApiResponse) => {
  let token: string = req.headers.authorization
    ? req.headers.authorization
    : "";
  if (!token) {
    return res.status(401).json({
      message: "token missed",
    });
  }
  token = token?.split("Bearer ")[1] || "";
  console.log(token);
  let userInfo;
  try {
    let user = await verifyJWT(token);
    if (typeof user === "object") {
      userInfo = user?.data;
    } else if (typeof user === "string") {
      userInfo = JSON.parse(user)?.data;
    }
    //console.log(user);
    //console.log(userInfo);
  } catch (error) {
    console;
    return res.status(401).json({
      message: "invalid token",
    });
  }

  const { course_id } = req.body;

  try {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
    }
  } catch (error) {
    return res.status(500).json({
      message: "unknown error in DB1",
    });
  }

  const userRepo = AppDataSource.getRepository(User);
  const courseRepo = AppDataSource.getRepository(Course);

  const currentUser = await userRepo.findOne({
    where: {
      id: userInfo?.id,
    },
    relations: {
      courses: true,
    },
  });

  if (!currentUser) {
    return res.status(403).json({
      message: "No user found",
    });
  }

  const currentCourse = await courseRepo.findOne({
    where: {
      id: course_id,
    },
    relations: {
      users: true,
    },
  });

  if (!currentCourse) {
    return res.status(403).json({
      message: "No course found",
    });
  }

  currentCourse.users = currentCourse.users.concat(currentUser);
  //currentCourse.users.push(currentUser);
  await courseRepo.manager.save(currentCourse);

  res.status(200).json({
    message: "added a new course",
  });
};
export default newCourse;
