const express = require("express");
//es5문법 -> 리액트는 es6라 다름
const app = express();
const port = 5000;
const cors= require("cors");
const { sequelize } = require("./models");
const passport = require("passport");
const passportConfig = require("./passport");

const router = require("./router/index");
const { session } = require("passport");

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

sequelize.sync({ alter: true })
  .then(() => {
    console.log("sequelize on");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, ()=> {
  console.log("server on" + port)
})

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//passport는 로그인 도와주는 라이브러리
app.use(passport.initialize());
app.use(passport.session());
passportConfig();
//session/ 나중에 커스텀 할거


app.use(router);
router.use("/api", router);



