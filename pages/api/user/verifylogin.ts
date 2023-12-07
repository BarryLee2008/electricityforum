import { NextApiRequest, NextApiResponse } from "next";

import { verifyJWT } from "utils/jwt";

const verifylogin = async (req: NextApiRequest, res: NextApiResponse) => {
  const { token = "" } = req.body;

  try {
    const result = await verifyJWT(token);
    //console.log(result);
    res.status(200).json({
      message: "clear token",
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: "invalid token",
    });
  }
};

export default verifylogin;
