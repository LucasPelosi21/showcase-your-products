import { User, PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

export default class UserService {
  private saltRounds = 10;

  private prisma = new PrismaClient();

  public show = async (id: number): Promise<User> => {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!user) throw new Error('Usuário não encontrado');
    return user;
  };

  public list = async (): Promise<User[]> => this.prisma.user.findMany();

  public store = async (data: User): Promise<User> => {
    const createData = { ...data };
    await bcrypt.hash(createData.password, this.saltRounds).then(hash => {
      createData.password = hash;
    });

    const createUser = await this.prisma.user.create({ data: createData });
    return createUser;
  };

  public update = async (id: number, data: User): Promise<User> => {
    const updateData = { ...data };
    await bcrypt.hash(updateData.password, this.saltRounds).then(hash => {
      updateData.password = hash;
    });

    const updateUser = await this.prisma.user.update({
      where: {
        id,
      },
      data: updateData,
    });
    return updateUser;
  };

  public remove = async (id: number): Promise<User> =>
    this.prisma.user.delete({
      where: {
        id,
      },
    });

  public findByEmail = async (email: string): Promise<User> => {
    const findUser = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (!findUser) throw new Error('Email não encontrado');
    return findUser;
  };
}
