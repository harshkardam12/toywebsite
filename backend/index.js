
const express = require('express')
var cors = require('cors');
const { default: data } = require('./controller/data');
const app = express()
require('dotenv').config()
const PORT =  4000;
app.use(cors())
app.get('/',(req,res)=>{
    console.log("hello");
    res.send("hello");

})
app.get('/toyproduct',data)
app.listen(PORT , ()=>{
    console.log("chal gye ",process.env.PORT );
})