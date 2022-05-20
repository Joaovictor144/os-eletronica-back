import {Router as RouterExpress} from 'express';
import jwt from 'jsonwebtoken';
import { orderRouter } from './orders.route';
import { userRouter } from './user.route';

const Router = RouterExpress();



Router.use('/user',userRouter)

function checkAutenticate(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];
    if(!token){
      return res.status(401).json({error: "acesso negado"})
    }

    try{
      const secret = process.env.SECRET

      jwt.verify(token,secret)
      next()
    }catch(error){
      return res.status(400).json({error: "acesso invalido"})
    }
}

Router.use('/order',checkAutenticate,orderRouter)



export {Router};