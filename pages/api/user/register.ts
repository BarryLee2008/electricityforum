import { NextApiRequest, NextApiResponse } from "next";
import AppDataSourcefrom from "db/data-source";
import { encryption } from "utils/md5";
import { User } from "db/enetity/index";
import { json } from "stream/consumers";
const register = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method?.toUpperCase() != "POST") {
    return res.status(405).json({
      message: "Method is not allowed",
    });
  }
  const { email = "", password = "", name = "" } = req.body;
  console.log(req.body);
  if (email.length === 0 || password.length === 0 || name.length === 0) {
    return res.status(401).json({
      message: "No information received",
    });
  }

  try {
    if (!AppDataSourcefrom.isInitialized) {
      await AppDataSourcefrom.initialize();
    }
  } catch (error) {
    return res.status(500).json({
      message: "Unkown Error in DB",
    });
  }

  const userRepo = AppDataSourcefrom.getRepository(User);
  let newUser = new User();
  newUser.email = email;
  newUser.password = encryption(password);
  newUser.name = name;

  try {
    const response = await userRepo.manager.save(newUser);
    console.log(response);
    res.status(200).json({
      message: "Welecome to Electricity Forum Community",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      message: "Unkown Error",
    });
  }
};

export default register;
