import { Router } from 'express';
import CategoryController from '../controllers/CategoryController';
import { validate } from '../middlewares/AuthMiddleware';

export default class CategoryRouter {
  private controller: CategoryController;

  constructor() {
    this.controller = new CategoryController();
  }

  public getRoutes = (): Router => {
    const router = Router();
    router.get('', validate, this.controller.list);
    router.get('/:id', validate, this.controller.show);
    return router;
  };
}
