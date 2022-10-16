import * as express from "express";
import { ICreateUser } from "../../src/interfaces/user";

declare global {
  namespace Express {
    interface Request {
      userEmail: string;
      newUser: ICreateUser;
    }
  }
}
