import { Router } from 'express';
import ProductController from '../controllers/ProductController';
import { validate } from '../middlewares/AuthMiddleware';

export default class ProductRouter {
  private controller: ProductController;

  constructor() {
    this.controller = new ProductController();
  }

  public getRoutes = (): Router => {
    const router = Router();
    router.get('', validate, this.controller.list);
    router.get('/:id', validate, this.controller.show);
    router.post('', validate, this.controller.store);
    router.put('/:id', validate, this.controller.update);
    router.delete('/:id', validate, this.controller.remove);
    return router;
  };
}
