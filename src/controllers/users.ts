import { Request, Response } from "express";

const users = [
  {
    name: "Renan",
    email: "eu@renanandrade.com.br",
  },
];

const index = (req: Request, res: Response) => res.json(users);

export default { index };
