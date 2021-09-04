import {Router} from 'express'
import account_controller from '../controllers/account'
const router = Router();


router.post("/login", account_controller.login);
router.post("/register", account_controller.register);


export default router;