import "reflect-metadata";
import express from "express";

import connection from "./database";
import routes from "./routes";

connection.create();

const app = express();

app.use(express.json());
app.use(routes);

export default app;
