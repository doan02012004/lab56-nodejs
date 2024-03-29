const mongoose = require('mongoose')
const connectDB = async(uri) =>{
    try {
        await mongoose.connect(uri)
        console.log("Connect success")
    } catch (error) {
        console.log("Connect fail")
    }
}

module.exports = connectDB