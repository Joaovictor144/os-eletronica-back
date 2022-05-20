import { hash, compare } from "bcrypt"
import jwt from "jsonwebtoken"
import { User } from "../models/User"

async function createUser(req, res){
  const {name,email,password,confirmPassword} = req.body

  const isExisting = await User.findOne({email:email})
  if(!name){
   return res.status(422).json({eror: 'O nome é obrigatorio'})
  }
  if(!email){
    return res.status(422).json({eror: 'O email é obrigatorio'})
  }
  if(!password){
    return res.status(422).json({eror: 'A Senha é obrigatorio'})
  }
  if(password !== confirmPassword){
    return res.status(422).json({eror: 'As Senhas não conferem'})

  }
  if(isExisting){
    return res.status(422).json({eror: 'Usuario já cadastrado'})
  }

  const passwordHash = await hash(password,10)
  const user = {
    name,
    email,
    password: passwordHash,
  }

  try{

    await User.create(user)
    

    res.status(201).json({mensage: 'Usuario cadastrado'})

  }catch(error){
    res.status(500).json({error: error})
  }
}

async function authenticateUser(req,res){
  const {email,password} = req.body;

  const user = await User.findOne({email:email})
  const checkPassword = await compare(password, user.password)

  if(!email){
    return res.status(422).json({eror: 'O email é obrigatorio'})
  }
  if(!password){
    return res.status(422).json({eror: 'A Senha é obrigatorio'})
  }
  if(!user){
    return res.status(404).json({eror: 'Usuario não encontrado'})
  }
  if(!checkPassword){
    return res.status(422).json({eror: 'Senha invalida'})
  }

  try{

    const secret = process.env.SECRET

    const token = jwt.sign(
      {
      id: user._id,
      },
      secret
    )

    res.status(200).json({mensage:'Autenticação realizada com sucesso ' ,token})



  }catch(error){
    res.status(500).json({error: error})
  }
  
}

async function updateUser(req, res){
  const id = req.params.id
  const {name,email,password} = req.body

  const us = await User.findOne({_id:id})

  const passwordHash = await hash(password,10)
  const confirmPasswordHash = await hash(password,10)

  const user = {
    name,
    email,
    password: passwordHash,
    confirmPassword:confirmPasswordHash,
    created_at: us.created_at,
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

export{createUser, updateUser, authenticateUser}