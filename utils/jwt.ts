import { verify, sign } from "jsonwebtoken";

const createJWT = async (data: any) => {
  if (!process.env.SECRETKEY) {
    throw "The secret key missed";
  }
  const jwt = sign({ data }, process.env.SECRETKEY, { expiresIn: "12h" });
  return jwt;
};

const verifyJWT = async (token: string) => {
  if (!process.env.SECRETKEY) {
    throw "The secret key missed";
  }

  const decode = verify(token, process.env.SECRETKEY);
  return decode;
};

export { createJWT, verifyJWT };
