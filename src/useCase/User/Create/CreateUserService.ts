import { User } from "../../../entities/User/User";
import { IUserCreateRepository } from "../../../repositories/User/IUserCreateRepository";
import { IUserCreateDTO } from "./IUserCreateDTO";

export class CreateUserService {
  constructor(private usersRespository: IUserCreateRepository){}

  async execute({name,email,password}:IUserCreateDTO):Promise<void> {

    const userExists =  await this.usersRespository.findByEmail(email)

    if(userExists) throw new Error("User already exists.")

    const user = new User({name,email,password})

    await this.usersRespository.save(user)
  }
}
