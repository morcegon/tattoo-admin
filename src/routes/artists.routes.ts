import { Router } from "express";

import ArtistController from "@controllers/ArtistController";

const routes = Router();

routes.get("/", ArtistController.index);
routes.post("/", ArtistController.store);
routes.put("/:id", ArtistController.update);
routes.delete("/:id", ArtistController.destroy);

export default routes;
