import { Router } from 'express';
import AuthController from '../controllers/AuthController';

export default class AuthRouter {
  private controller: AuthController;

  constructor() {
    this.controller = new AuthController();
  }

  public getRoutes = (): Router => {
    const router = Router();
    router.post('/login', this.controller.login);
    return router;
  };
}
