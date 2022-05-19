import { hash } from "bcrypt"
import { User } from "../models/User"

async function createUser(req, res){
  const {name,email,password} = req.body

  const isExisting = await User.findOne({email:email}).exec()
  if(!name){
   return res.status(422).json({eror: 'O nome é obrigatorio'})
  }
  if(!email){
    return res.status(422).json({eror: 'O email é obrigatorio'})
  }
  if(!password){
    return res.status(422).json({eror: 'A Senha é obrigatorio'})
  }
  if(isExisting){
    return res.status(422).json({eror: 'Usuario já cadastrado'})
  }

  const passwordHash = await hash(password,10)
  const user = {
    name,
    email,
    password: passwordHash,
    due_date: '',
    create_at: (new Date).toString(),
  }

  try{

    await User.create(user)
    

    res.status(201).json({mensage: 'Usuario cadastrado'})

  }catch(error){
    res.status(500).json({error: error})
  }
}

async function updateUser(req, res){
  const id = req.params.id
  const {name,email,password} = req.body

  const us = await User.findOne({_id:id})

  const passwordHash = await hash(password,10)

  const user = {
    name,
    email,
    password: passwordHash,
    due_date: us.due_date,
    create_at: us.create_at,
  }

  try{
    const update = await User.updateOne({_id:id}, user)
    if(update.matchedCount === 0){
      return res.status(422).json({eror: 'Usuario não encontrado'})
    }
    res.status(200).json(user)
  }catch(error){
    res.status(500).json({error: error})
  }
}

export{createUser, updateUser}