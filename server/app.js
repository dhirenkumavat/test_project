const express = require("express");
const bodayparser = require("body-parser");
const cors = require ("cors");
const jwt = require("jsonwebtoken");
const PORT = 8080
const app = express();
const Api =require ('./routes/api')
app.use(bodayparser.json());
app.use(cors());
app.use('/api',Api);

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });
  app.get("/", (req, res, next) => {
    throw new Error("Something went wrong!");
    res.send("Welcome to main route!");
  });
  // error handler middleware
  app.use((error, req, res, next) => {
      res.status(error.status || 500).send({
        error: {
          status: error.status || 500,
          message: error.message || 'Internal Server Error',
        },
      });
    });
    
//Server listen On Server Port
 app.listen(PORT,()=>{
    console.warn("server Listen in" +  PORT);
})