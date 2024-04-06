const express = require('express')
const router = express.Router()
const categoriesController = require('../controllers/categoriesController')
const authenticate = require('../middleware/authenticate')
router.get('/',categoriesController.getAllCategories)
router.post('/',authenticate.authenticate,categoriesController.postCategory)

module.exports = router