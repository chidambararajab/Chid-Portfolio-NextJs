import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({ data: [{ one: "one" }] });
};
