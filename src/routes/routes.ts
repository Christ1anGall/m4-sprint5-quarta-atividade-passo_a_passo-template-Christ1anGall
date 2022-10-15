import { Router } from "express";
import userCreateController from "../controllers/userCreate.controller";
import userListController from "../controllers/userList.controller";

const routes = Router();

routes.post("/users", userCreateController);
routes.get("/users", userListController);

export default routes;
