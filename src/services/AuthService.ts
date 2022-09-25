import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UserService from './UserService';

interface Ilogin {
  email: string;
  password: string;
}

export default class AuthService {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public login = async ({ email, password }: Ilogin): Promise<unknown> => {
    const user = await this.userService.findByEmail(email);
    const matchPassword = await bcrypt.compare(password, user.password);

    if (!matchPassword) {
      throw new Error('Login Inválido');
    }

    const customJWT = jwt.sign(
      {
        email: user?.email,
        password: user?.password,
      },
      process.env.CUSTOM_JWT_KEY || '',
      { expiresIn: '7d' },
    );

    return { auth: true, token: customJWT };
  };
}
