const Joi = require('joi')


const createProductValidate= Joi.object({
    title: Joi.string().required().messages({
        "any.required":"title bắt buộc nhập",
        "string.empty":"title không được để trống"
    }),
    image:Joi.string().required().messages({
        "any.required":"image bắt buộc nhập",
        "string.emty":"image không được để trống"
    }),
    category:Joi.string().required().messages({
        "any.required":"rate bắt buộc nhập",
        "string.empty":"rate không được để trống"
    }),
    rate:Joi.number().min(1).max(10).required().messages({
        "any.required":"rate bắt buộc nhập",
        "number.empty":"rate không được để trống",
        "number.min":"rate ít nhất là {#limit} ",
        "number.max":"rate nhiều nhất là {#limit}"
    })
})

const updateProductValidate = Joi.object({
    title: Joi.string().empty().messages({
        "any.required":"title bắt buộc nhập",
        "string.empty":"title không được để trống"
    }),
    image:Joi.string().required().messages({
        "any.required":"image bắt buộc nhập",
        "string.emty":"image không được để trống"
    }),
    rate:Joi.number().required().min(1).max(10).messages({
        "any.required":"rate bắt buộc nhập",
        "number.empty":"rate không được để trống",
        "number.min":"rate ít nhất là {#limit} ",
        "number.max":"rate nhiều nhất là {#limit}"
    })
})
module.exports = {
    createProductValidate,
    updateProductValidate
}