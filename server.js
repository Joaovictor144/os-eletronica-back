import express from 'express';
import { Router } from './routers';
import 'dotenv/config'
import mongoose from 'mongoose';
const app = express();


app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use(express.json())

app.use(Router);

mongoose.connect(process.env.STRING_CONECT_MONGO)
    .then(()=>{
      app.listen(process.env.PORT,()=>{
        console.log('server running')
      })
    })
    .catch((err)=>console.log(err))
