import { Request, Response } from "express";
import { CreateUserService } from "./CreateUserService";

export class CreateUserController {

  constructor(private createUser: CreateUserService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    try {
      this.createUser.execute({ name, email, password });
      return res.status(201).send();
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpect error.",
      });
    }
  }
}
