import { Router } from "express";
import createUserController from "../../useCase/User/Create";

const userRoutes = Router();

userRoutes.get("/",(req,res)=>{
  return res.json({message:"Hello World"})
})

userRoutes.post("/", (req, res) => createUserController.handle(req, res));



export default userRoutes
