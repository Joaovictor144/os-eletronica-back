import mongoose, { Schema } from "mongoose";

const ordersSchema = new Schema({
  user:{type: Schema.Types.ObjectId, ref:'Users', required: true},
  client:{
    name:{type: String, required: true},
    tell:{type: String, required: true},
    address:{type: String, required: true},
    cpf:{type: String, required: true},
    rg:{type: String, required: true},
  },
  device:{
    type:{type: String, required: true},
    brand:{type: String, required: true},
    model:{type: String, required: true},
    serie_number:{type: String, required: true},
    condition:{type: String, required: true},
    acessories:{type: String},
    claimed_defect:{type: String, required: true},
    found_defect:{type: String},
  },
  value:{ type: Number},
  finished_at:{type:Date},
  created_at:{type:Date, default: new Date()}
})

const Order = mongoose.model('Orders',ordersSchema)

export{Order}