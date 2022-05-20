import mongoose, { Schema } from "mongoose";

const ordersSchema = new Schema({
  user:{type: Schema.Types.ObjectId, ref:'Users', required: true},
  client:{type: String, required: true},
  device:{type: String, required: true},
  description: String,
  value:{ type: Number, required: true},
  finished_at:{type:Date},
  created_at:{type:Date, default: new Date()}
})

const Order = mongoose.model('Orders',ordersSchema)

export{Order}