const categoryModel = require('../models/categoryModel')

const getAllCategories = async(req,res)=>{
    try {
        const categories = await categoryModel.find()
        return res.status(200).json({
            message:"Get all",
            data: categories,
        })
    } catch (error) {
        return res.status(400).json({
            message:error.message
        })
    }
}
const postCategory = async(req,res)=>{
    try {
        const categories = await categoryModel.create(req.body)
        return res.status(200).json({
            message:"add ok",
            data: categories,
        })
    } catch (error) {
        return res.status(400).json({
            message:error.message
        })
    }
}

module.exports = {
    getAllCategories,
    postCategory
}