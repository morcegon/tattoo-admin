import { Router } from "express";
import UsersController from "@controllers/users";

const routes = Router();

routes.get("/users", UsersController.index);

export default routes;
