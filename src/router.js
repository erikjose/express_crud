// Colocar nossas rotas
import { Router } from "express";

const routes = new Router();

import UserController from "./app/controllers/UserController";

routes.get("/users", UserController.index);
routes.get("/users/:user", UserController.getUser);
routes.put("/users/:user", UserController.update);
routes.post("/users/:user", UserController.store);
routes.delete("/users/:user", UserController.delete);

export default routes;
