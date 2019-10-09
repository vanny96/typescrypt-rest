import {Router} from 'express';
import * as userController from '../controllers/UserController';
import verifyToken from '../security/verifyToken';

const router: Router = Router();

router.get('/', verifyToken, userController.user_list);
router.post('/', userController.user_create);
router.post('/login', userController.login_post);

export default router;