import { Request, Response } from 'express';
import ProductService from '../services/ProductService';

export default class ProductController {
  private service: ProductService;

  constructor() {
    this.service = new ProductService();
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
