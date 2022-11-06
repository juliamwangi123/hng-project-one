// import modules 
require('dotenv').config()
 const express = require('express');
const readline= require('readline-sync')
 //intialize express
 const app = express()
 let operator =['+', '-', '*']

 let pickedOperator= readline.question(`Select 0 for ${operator[0]} 1. For  ${operator[1]} or 2. for ${operator[2]}: `)


 let opertion =()=>{

    let num1 = Number(readline.question('input value 1:  '))
    let num2 = Number(readline.question('input value 2:  ')
)

    if(pickedOperator == operator.indexOf('+')){
        return num1 + num2
    }else if( pickedOperator == operator.indexOf('-')){
        return num1 - num2
    }else if(pickedOperator == operator.indexOf('*')){
        return num1 * num2
    }else{
        return 'invalid operation'
    }



 }

 //get request
app.get('/', (req,res)=>{
    res.status(200).json({"slackUsername":"julia mwangi", "backend":true, "age":25, "bio": "My name is julia mwangi a  software developer from Kenya"})
})




app.listen(process.env.PORT, ()=>{
    console.log(process.env.PORT)

})

// Export the Express API
module.exports = app
 



