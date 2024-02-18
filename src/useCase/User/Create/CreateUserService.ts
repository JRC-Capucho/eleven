import { User } from "../../../entities/User/User";
import { IUserRepository } from "../../../repositories/User/IUserCreateRepository";
import { IUserDTO } from "./IUserDTO";

export class CreateUserService {
  constructor(private usersRespository: IUserRepository){}

  async execute({name,email,password}:IUserDTO):Promise<void> {

    const userExists =  await this.usersRespository.findByEmail(email)

    if(userExists) throw new Error("User already exists.")

    const user = new User({name,email,password})

    await this.usersRespository.save(user)
  }
}
