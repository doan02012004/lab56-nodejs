const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors')
const routes = require('./routes/index')
const connectDB = require('./config/db')
const app = express()
dotenv.config();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
    extended:false
}))
const Port = process.env.PORT;
const dbUrl = process.env.DB_URL;
connectDB(dbUrl)
routes(app);
app.listen(Port,()=>{
    console.log("Server is running");
})