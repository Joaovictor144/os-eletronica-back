import {Order} from "../models/Orders"

async function createOrder(req,res){
  try{
    await Order.create(req.body)

    res.status(201).json({mensage:'Ordem de Serviço cadastrada'})
  }catch(error){
    res.status(500).json({error: "Não foi possivel completar a requisição", request: "Cadastrar ordem"})
  }
}


async function listOrdersAll(req, res){
  try{

    const orders = await Order.find();

    res.status(200).json(orders)
  }catch(error){
    res.status(500).json({error: "Não foi possivel completar a requisição", request:"listar ordens"})

  }
}

async function listOrderUser(req, res){
  const id = req.params.id

  try{
    const order = await Order.find({user:id})

    res.status(201).json(order)
  }catch(error){
    res.status(500).json({error: "Não foi possivel completar a requisição", request:"listar ordem"})

  }
}

export{createOrder,listOrdersAll,listOrderUser}