const Joi = require('joi')


const registerValidate = Joi.object({
    name: Joi.string().required().messages({
        "any.required":"Usernam bắt buộc nhập",
        "string.emty":"Username không được để trống"
    }),
    email:Joi.string().email().required().trim().messages({
        "any.required":"Email bắt buộc nhập",
        "string.emty":"Email không được để trống",
        "string.email":"Email không hợp lệ",
    }),
    password:Joi.string().required().min(6).trim().messages({
        "any.required":"Password bắt buộc nhập",
        "string.emty":"Password không được để trống",
        "string.min":"Password ít nhất {#limit} kí tự",
        "string.trim":"Password không được để khoảng trắng"
    })
})

const loginValidate = Joi.object({
    email:Joi.string().email().required().trim().messages({
        "any.required":"Email bắt buộc nhập",
        "string.emty":"Email không được để trống",
        "string.email":"Email không hợp lệ",
    }),
    password:Joi.string().required().min(6).trim().messages({
        "any.required":"Password bắt buộc nhập",
        "string.emty":"Password không được để trống",
        "string.min":"Password ít nhất {#limit} kí tự",
        "string.trim":"Password không được để khoảng trắng"
    })
})
module.exports = {
    registerValidate,
    loginValidate
}