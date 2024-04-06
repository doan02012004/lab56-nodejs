const express = require('express')
const router = express.Router()
const productController = require('../controllers/products')
const authenticate = require('../middleware/authenticate')
router.get('/',productController.getAllProducts)
router.get('/:id',productController.getProductById)
router.post('/',authenticate.authenticate,productController.createProduct)
router.put('/:id',authenticate.authenticate,productController.updateProduct)
router.delete('/:id',authenticate.authenticate,productController.deleteProduct)

module.exports = router