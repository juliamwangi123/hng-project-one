const express  = require("express");

const indexRouter = require("./routes/routes");

const app = express();

// app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);



app.listen(process.env.PORT, () => {
  console.log("connected");
});
 



