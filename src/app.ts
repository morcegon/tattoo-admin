import "reflect-metadata";
import express from "express";

import routes from "@routes/index";

import connection from "./database";

connection.create();

const app = express();

app.use(express.json());
app.use(routes);

export default app;
