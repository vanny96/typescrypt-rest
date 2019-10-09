import {Router} from 'express';
import * as userController from '../controllers/UserController';

const router: Router = Router();

router.get('/', userController.user_list);
router.post('/', userController.user_create);

export default router;