import { Request, Response } from 'express';
import CategoryService from '../services/CategoryService';

export default class CategoryController {
  private service: CategoryService;

  constructor() {
    this.service = new CategoryService();
  }

  public list = async (_: Request, res: Response) => {
    const obj = await this.service.list();
    return res.send(obj);
  };

  public show = async (req: Request, res: Response) => {
    const obj = await this.service.show(Number(req.params.id));
    return res.send(obj);
  };
}
