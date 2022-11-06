const { check, validationResult } = require("express-validator");

class AssignmentController {
  index(req, res) {
    const obj = {
      slackUsername: "julia mwangi",
      backend: true,
      age: 25,
      bio: "I am julia mwangi",
    };
    res.status(200).json(obj);
  }

  async operation(req, res) {
    try {
      let result = null;
      let x = Number(req.body.x);
      let y = Number(req.body.y);
      let operation_type = null;
      if (typeof req.body.operation_type !== "string")
        throw new Error("Operation type must be a string");
      let operationType = req.body.operation_type.toLowerCase();

      console.log(req.body);
      if (isNaN(x) || isNaN(y)) {
        throw new Error("Input must be a number");
      }
      

      let matchAdd = /(add|addition|\+|plus)/;
      let matchSubtraction = /(deduct|subtract|\-|minus)/;
      let matchMultiply = /(multiplication|multiply|x|\*|times)/;

      if (matchAdd.test(operationType)) {
        result += x + y;
        operation_type = "addition";
      }
      if (matchSubtraction.test(operationType)) {
        result += x - y;
        operation_type = "subtraction";
      }
      if (matchMultiply.test(operationType)) {
        result += x * y;
        operation_type = "multiplication";
      }

      return res.status(200).json({
        slackUsername: "julia mwangi",
        result,
        operation_type: operation_type,
      });
    } catch (error) {
      return res.status(400).json({
        status: "failed",
        message: error.message,
      });
    }
  }
}
module.exports = new AssignmentController();