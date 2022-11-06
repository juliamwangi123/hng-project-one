const express  = require("express");
const indexRouter =require('./routes/routes')


const app = express();

app.use(express.json());

app.use(indexRouter);



app.listen(process.env.PORT, () => {
  console.log("connected");
});
 



