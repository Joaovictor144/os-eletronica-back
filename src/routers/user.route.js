import {Router} from 'express';
import { authenticateUser, createUser, updateUser } from '../controllers/userController';




const userRouter = Router();

userRouter.post('/register', createUser)

userRouter.post('/login', authenticateUser )

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