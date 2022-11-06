// import modules 
require('dotenv').config()
 const express = require('express');
const readline= require('readline-sync')
 //intialize express
 const app = express()
 app.use(express.json())
 let operator =['+', '-', '*']




 //get request
app.get('/', (req,res)=>{
    res.status(200).json({"slackUsername":"julia mwangi", "backend":true, "age":25, "bio": "My name is julia mwangi a  software developer from Kenya"})
})



app.post('/operation', (req, res)=>{
    const{operation, x, y}= req.body
    let result;
    switch(operation){
        case "addition":
            result =x+y
            break;
            case "subtraction":
            result =x-y
            break;
            case "multiplication":
            result =x*y
            break;
            default:
                result = 'Invalid operation'
    }

    res.status(200).json({"slackUsername":"julia mwangi", "operation_type":operation, "result": result})
})

app.listen(process.env.PORT, ()=>{
    console.log('connected')

})

// Export the Express API
module.exports = app
 



