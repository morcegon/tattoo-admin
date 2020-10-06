import { Router } from "express";

import artists from "./artists.routes";
import jobs from "./jobs.routes";

const routes = Router();

routes.use("/artist", artists);
routes.use("/job", jobs);

export default routes;
