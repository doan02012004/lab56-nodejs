const mongoose = require('mongoose')

const authSchema = new mongoose.Schema({
    name: {
        type:String,
        require:true,
        min:3
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    }
},{
    timestamps:true,versionKey:false
})
const authModel = mongoose.model('users',authSchema);
module.exports = authModel