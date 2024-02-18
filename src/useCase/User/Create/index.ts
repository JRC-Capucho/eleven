import { PrismaClient } from "@prisma/client";

import { ORMCreateUser } from "./ORMCreateUser";
import { CreateUserService } from "./CreateUserService";
import { CreateUserController } from "./CreateUserController";

const prisma = new PrismaClient()

const ormCreate = new ORMCreateUser(prisma)

const createUser = new CreateUserService(ormCreate)

const createUserController = new CreateUserController(createUser)

export default createUserController

