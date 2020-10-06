import { Router } from "express";

import JobsController from "@controllers/JobsController";

const routes = Router();

routes.get("/", JobsController.index);
routes.post("/", JobsController.store);
routes.put("/:id", JobsController.update);
routes.delete("/:id", JobsController.destroy);

export default routes;
