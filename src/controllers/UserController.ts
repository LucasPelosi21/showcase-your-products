import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public list = async (_: Request, res: Response) => {
    const obj = await this.service.list();
    return res.send(obj);
  };

  public show = async (req: Request, res: Response) => {
    const obj = await this.service.show(Number(req.params.id));
    return res.send(obj);
  };

  public store = async (req: Request, res: Response) => {
    const obj = await this.service.store(req.body);
    return res.send(obj);
  };

  public update = async (req: Request, res: Response) => {
    const obj = await this.service.update(Number(req.params.id), req.body);
    return res.send(obj);
  };

  public remove = async (req: Request, res: Response) => {
    const obj = await this.service.remove(Number(req.params.id));
    return res.send(obj);
  };
}
