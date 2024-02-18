import { User } from "../../entities/User/User";

export interface IUserCreateRepository {
  findByEmail(email: string): Promise<User | undefined>
  save(user: User): Promise<void>
}
