const authModel = require('../models/authModel');
const bcrypt = require('bcrypt')
const Schemas = require('../schemas/auth')
const jwt = require('jsonwebtoken')
const auth_register = async (req, res) => {
    try {
        const data = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
        const { error } = Schemas.registerValidate.validate(req.body, { abortEarly: false })
        if (error) {
            const messages = error.details.map((message) => message.message);
            return res.status(400).json({
                message: messages
            })
        }
        const checkemail = await authModel.findOne({ email: data.email })
        if (checkemail) {
            return res.status(400).json({
                message: "Email da ton tai!"
            })
        }
        else {
            //hash password
            const saltRoud = 10;
            const hashPassword = await bcrypt.hash(data.password, saltRoud);
            data.password = hashPassword;
            const dataUser = await authModel.create(data)
            return res.status(200).json({
                message: "Dang ky thanh cong",
                data:{ ...dataUser.toObject(), password: undefined },
            })
        }


    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

const auth_login = async (req, res) => {
    try {
        const data = {
            email: req.body.email,
            password: req.body.password
        }
        const { error } = Schemas.loginValidate.validate(req.body, { abortEarly: false })
        if (error) {
            const messages = error.details.map((message) => message.message);
            return res.status(400).json({
                message: messages
            })
        }
        const checkLogin = await authModel.findOne({ email: data.email })
        if (!checkLogin) {
            return res.status(400).json({
                message: "User chưa tồn tại"
            })
        }else {
            const isPasswordMatch = await bcrypt.compare(req.body.password,checkLogin.password)
            if (isPasswordMatch) {
                // mã hóa
                const token = jwt.sign({ id: checkLogin._id }, "key", {
                    expiresIn: "1d",
                  });
                return res.status(200).json({
                    message: "Đăng nhập thành công!",
                    data: { ...checkLogin.toObject(), password: undefined },
                    token,
                })
            }
            else {
                return res.status(400).json({
                    message: "Sai mật khẩu"
                })
            }
        }

    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}
module.exports = {
    auth_register,
    auth_login
}