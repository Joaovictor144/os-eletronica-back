import {Router} from 'express';
import { createOrder, listOrdersAll, listOrderUser } from '../controllers/orderController';

const orderRouter = Router();



orderRouter.post('/',createOrder)
orderRouter.get('/all', listOrdersAll)
orderRouter.get('/:id', listOrderUser)


export{orderRouter}

