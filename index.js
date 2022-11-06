// import modules 
require('dotenv').config()
 const express = require('express');
const readline= require('readline-sync')
 //intialize express
 const app = express()
 app.use(express.json())




 


app.post('/', (req, res)=>{
    const operations ={
        addition:'addition',
        subtraction:'subtraction',
        multiplication:'multiplication'

    } 
    const{operationValues=Object.values(operations), x, y}= req.body
    let result;
    switch(operationValues){
        case "addition":
            result =Number(x+y)
            break;
            case "subtraction":
            result =Number(x-y)
            break;
            case "multiplication" :
            result =Number(x*y)
            break;
            default:
                result = 'Invalid operation'
    }

   
    console.log(typeof(result))
    res.status(200).json({"slackUsername":"julia mwangi", "operation_type":operationValues, "result": result})
})

app.listen(process.env.PORT, ()=>{
    console.log('connected')

})

// Export the Express API
module.exports = app
 



