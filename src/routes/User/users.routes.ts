import { Router } from "express";
import createUserController from "../../useCase/User/Create";
import { validadCreateUser } from "../../useCase/User/Create/validedCreate";

const userRoutes = Router();

userRoutes.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});

userRoutes.post("/", validadCreateUser, (req, res) =>
  createUserController.handle(req, res),
);

export default userRoutes;
