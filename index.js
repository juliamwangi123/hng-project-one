// import modules 
require('dotenv').config()
 const express = require('express');


 //intialize express
 const app = express()


//get request
app.get('/', (req,res)=>{
    res.status(200).json({"slackUsername":"julia mwangi", "backend":true, "age":25, "bio": "My name is julia mwangi a  software developer from Kenya"})
})


app.listen(process.env.PORT, ()=>{
    console.log('connected')
})

// Export the Express API
module.exports = app
 



