const express = require("express");
const router = express.Router();

router.get('/', (rqq,res)=>{
    res.status(200).json({"slackUsername":"julia mwangi", age:25, backend:true, bio:"am a software developer"})
})


router.post("/", (req, res)=>{
    let x =Number(req.body.x)
    let y = Number(req.body.y)
    let results;
    let operation_type;

    switch(operation_type){
        case 'addition':
            results= x+y;
            break;
        case 'subtraction':
                results= x+y;
                break
        case 'multiplication':
                    results= x+y;
                    break
        default:
            return 'invalid operation'
    }

    res.status(200).json({slackUsername: "julia mwangi", result:results,  operation_type:operation_type})
    


});




module.exports = router;