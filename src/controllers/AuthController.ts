import { Request, Response } from 'express';
import AuthService from '../services/AuthService';

export default class AuthController {
  private service: AuthService;

  constructor() {
    this.service = new AuthService();
  }

  public login = async (req: Request, res: Response): Promise<unknown> => {
    const result = await this.service.login(req.body);
    return res.send(result);
  };
}
