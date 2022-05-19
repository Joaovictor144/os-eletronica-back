import {Router} from 'express';
import { createUser, updateUser } from '../controllers/userController';
import { User } from '../models/User';



const userRouter = Router();

userRouter.post('/', createUser)

// userRouter.patch('/:id', updateUser)









// //listar todos os usuarios
// userRouter.get('/',async (req,res)=>{
//   try{

//     const user = await User.find();
//     res.status(200).json(user)

//   }catch(error){
//     res.status(500).json({error: error})

//   }
// })

export{userRouter}