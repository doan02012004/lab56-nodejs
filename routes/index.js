const authRouter = require('./auth')
const categoriesRouter = require('./categories')
const productRouter = require('./product')
const routes = (app)=>{
    app.use('/auth',authRouter)
    app.use('/categories',categoriesRouter)
    app.use('/products',productRouter)
}

module.exports = routes