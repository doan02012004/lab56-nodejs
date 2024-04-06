const productModel = require('../models/productModel')
const productSchema = require('../schemas/product');
const createProductValidate = productSchema.createProductValidate;
const updateProductValidate = productSchema.updateProductValidate
const getAllProducts = async(req,res)=>{
    try {
        const products = await productModel.find().populate('category')
        return res.status(200).json({
            message:"Get all",
            data: products,
        })
    } catch (error) {
        return res.status(400).json({
            message:error.message
        })
    }
}
const getProductById = async(req,res)=>{
    const id  = req.params.id
    try {
        const product = await productModel.find({_id:id}).populate('category')
        if(!product){
            return res.status(400).json({
                message:"product not found",
                
            })
        }
        return res.status(200).json({
            message:"Get id",
            data: product,
        })
    } catch (error) {
        return res.status(400).json({
            message:error.message
        })
    }
}
const createProduct = async(req,res)=>{
    try {
        const { error } = createProductValidate.validate(req.body, { abortEarly: false })
        if (error) {
            const messages = error.details.map((message) => message.message);
            return res.status(400).json({
                message: messages
            })
        }
        const product = await productModel.create(req.body)
        return res.status(200).json({
            message:"add ok",
            data: product,
        })
    } catch (error) {
        return res.status(400).json({
            message:error.message
        })
    }
}
const updateProduct = async(req,res)=>{
    try {
        const id = req.params.id
        const { error } = updateProductValidate.validate(req.body, { abortEarly: false })
        if (error) {
            const messages = error.details.map((message) => message.message);
            return res.status(400).json({
                message: messages
            })
        }
        const product = await productModel.findByIdAndUpdate(id, req.body)
        return res.status(200).json({
            message:"update ok",
            data: product,
        })
    } catch (error) {
        return res.status(400).json({
            message:error.message
        })
    }
}
const deleteProduct = async(req,res)=>{
    try {
        const id = req.params.id
        const product = await productModel.findByIdAndDelete(id);
        if(!product){
            return res.status(400).json({
                message:"product not found",
                
            })
        }
        return res.status(200).json({
            message:"delete ok",
            data: product,
        })
    } catch (error) {
        return res.status(400).json({
            message:error.message
        })
    }
}
module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductById
}