import { Router } from 'express';
import { validateBody } from '../middlewares/ValidateBodyMiddleware';
import UserController from '../controllers/UserController';
import { validate } from '../middlewares/AuthMiddleware';
import { storeUserSchema, updateUserSchema } from '../schemas/UserSchema';

export default class UserRouter {
  private controller: UserController;

  constructor() {
    this.controller = new UserController();
  }

  public getRoutes = (): Router => {
    const router = Router();
    router.get('', validate, this.controller.list);
    router.get('/:id', validate, this.controller.show);
    router.post('', validateBody(storeUserSchema), this.controller.store);
    router.put(
      '/:id',
      validate,
      validateBody(updateUserSchema),
      this.controller.update,
    );
    router.delete('/:id', validate, this.controller.remove);
    return router;
  };
}
