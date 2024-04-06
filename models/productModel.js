
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: {
        type:String,
        require:true,
    },
   image:{
    type:String,
    required:true
   },
   category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"categories"
   },
   rate:{
    type:Number,
    required:true,
    min:1,
    max:10,
   }
},{
    timestamps:true,versionKey:false
})
const productModel = mongoose.model('products',productSchema);
module.exports = productModel