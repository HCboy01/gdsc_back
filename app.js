const express = require("express");
//es5문법 -> 리액트는 es6라 다름
const app = express();
const port = 5000;
const cors= require("cors");


const router = require("./router/index")

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);


app.listen(port, ()=> {
  console.log("server on" + port)
})

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use(router);
router.use("/api", router);


