require('dotenv').config()  
const express = require("express")
const cors = require('cors');
const path = require('path'); 
const connect = require('./Src/config/DBConnection')
const routes = require('./Src/Api/Routes/Index')
const port = process.env.PORT || 5000      
const app = express()


app.use(cors());
// app.use(express.urlencoded())
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, 'Upload')));


app.listen(port ,()=>{
                    connect()
                    console.log(`server running on ${port}`)})