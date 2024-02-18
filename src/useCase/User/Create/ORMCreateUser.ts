import { PrismaClient } from "@prisma/client";
import { User } from "../../../entities/User/User";
import { IUserCreateRepository } from "../../../repositories/User/IUserCreateRepository";


export class ORMCreateUser implements IUserCreateRepository {
  constructor(private prisma: PrismaClient) { }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.prisma.user.findFirst({
      where: {
        email
      }
    })
    return user
  }

  async save(user: User): Promise<void> {
    await this.prisma.user.create({
      data: user
    })
  }

}
