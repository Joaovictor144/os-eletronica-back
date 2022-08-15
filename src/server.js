import express from 'express';
import { Router } from './routers';
import 'dotenv/config'
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();


app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD", "TRACE", "CONNECT"],
  maxAge: 300,
  credentials: true
}))

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

