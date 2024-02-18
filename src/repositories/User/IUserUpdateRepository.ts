import { User } from "../../entities/User/User"

export interface IUserUpdateRepository {
  findById(id:string):Promise<User | undefined>
  update(user:User):Promise<void>
}
