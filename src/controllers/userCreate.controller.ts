import { Request, Response } from "express";

import userCreateService from "../services/userCreate.service";

const userCreateController = async (req: Request, res: Response) => {
  try {
    const { email, name, age, password } = req.newUser;

    const newUser = await userCreateService({ email, name, age, password });

    return res.status(201).json(newUser);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).send({
        error: error.message,
        message: error.message,
      });
    }
  }
};

export default userCreateController;
