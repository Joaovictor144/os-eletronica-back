import {Router as RouterExpress} from 'express';
import { userRouter } from './user.route';

const Router = RouterExpress();


Router.get('/', (req, res)=>{
  res.json({
    message: 'Oi express!'
  })
})

Router.use('/user',userRouter)



export {Router};