import mongoose from "mongoose";

const User = mongoose.model('Users',{
  name: String,
  email: String,
  password: String,
  due_date: String,
  create_at: String
})

export{User}