const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: {
        type:String,
        require:true,
        min:3
    },
   des:{
    type:String,
    required:true
   }
},{
    timestamps:true,versionKey:false
})
const categoryModel = mongoose.model('categories',categorySchema);
module.exports = categoryModel