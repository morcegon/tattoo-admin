import { Router } from "express";

import artists from "./artists.routes";

const routes = Router();

routes.use("/artist", artists);

export default routes;
