import { Request, Response } from "npm:express@4.18.2";
import { typeExample } from "../types.ts";

export const get = async (
  req: Request<{}, {}, {}, {}>,
  res: Response<typeExample | { error: unknown }>
) => {
  try {
    //code
    res.status(200).json().send();
  } catch (error) {
    res.status(500).send(error);
  }
};

export default get;
