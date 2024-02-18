import { Router } from "express";
import userRoutes from "../../routes/User/users.routes";

const routes = Router()

routes.use('/users', userRoutes)

export default routes
