import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  create_at: {type:Date, default: new Date()}
})

const User = mongoose.model('Users',userSchema)

export{User}