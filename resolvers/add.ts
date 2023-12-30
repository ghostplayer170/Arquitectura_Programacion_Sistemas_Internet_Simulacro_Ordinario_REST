// deno-lint-ignore-file
// @ts-ignore

import { Request, Response } from "npm:express@4.18.2";
import { typeExample } from "../types.ts";

export const add = async (
  req: Request<{}, {}, typeExample>,
  res: Response<typeExample | { error: unknown }>
) => {
  try {
    //code
    res.status(200).json().send();
  } catch (error) {
    res.status(500).send(error);
  }
};

export default add;
