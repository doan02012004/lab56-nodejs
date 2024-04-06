const jwt = require('jsonwebtoken');
const authModel = require('../models/authModel')

const authenticate = async(req,res,next)=>{
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
          return res.status(401).json({
            message: "No Authorization",
          });
        }
       
        const data = jwt.verify(token,"khoa-cua-ban");
        if (!data) {
          return res.status(401).json({
            message: "No Authorization",
          });
        }
        // check user
        const user = await authModel.findById(data.id);
        console.log(user)
        if (!user) {
          return res.status(404).json({
            message: "Not Found",
          });
        }
        // user.role !== 'admin'
        // if(user.role !== 'admin'){
        //     return res.status(403).json({
        //         message:'Ban ko co quyen lam viec nay'
        //     })
        // }
        next();
      } catch (error) {
        res.status(400).json({
          message: error.message,
        });
      }
}

module.exports = {
    authenticate
}