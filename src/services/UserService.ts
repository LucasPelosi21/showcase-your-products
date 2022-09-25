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
    await bcrypt
      .hash(data.password, this.saltRounds)
      // eslint-disable-next-line
      .then(hash => (data.password = hash));
    const createUser = await this.prisma.user.create({ data });
    return createUser;
  };

  public update = async (id: number, data: User): Promise<User> => {
    await bcrypt
      .hash(data.password, this.saltRounds)
      // eslint-disable-next-line
      .then(hash => (data.password = hash));
    const updateUser = await this.prisma.user.update({
      where: {
        id,
      },
      data,
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
