import {Router} from 'express';
import { createUser } from '../controllers/userController';
import { User } from '../models/User';



const userRouter = Router();

userRouter.post('/', createUser)


export{userRouter}