const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const authenticate = require('../middleware/authenticate')

router.post('/register',authController.auth_register)
router.post('/login',authController.auth_login)

module.exports = router