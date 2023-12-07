import { NextApiRequest, NextApiResponse } from "next";
import { User } from "db/enetity";
import { createJWT } from "utils/jwt";
import AppDataSourcefrom from "db/data-source";
import { encryption } from "utils/md5";
const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const { username = "", password = "" } = req.body;
  //console.log("aaa");
  console.log(req.body?.password);
  if (username.length === 0 || password.length === 0) {
    return res.status(401).json({
      message: "No info received",
    });
  }
  if (!AppDataSourcefrom.isInitialized) {
    await AppDataSourcefrom.initialize();
  }

  const userRepo = AppDataSourcefrom.getRepository(User);

  const response = await userRepo.findOne({
    where: {
      email: username,
      password: encryption(password),
    },
  });
  console.log(response);
  if (!response) {
    return res.status(401).json({
      message: "No User Found",
    });
  } else {
    const token = await createJWT(response);
    res.status(200).json({
      message: "Successfully Loged in",
      data: {
        user: response,
        token,
      },
    });
  }
};

export default login;
