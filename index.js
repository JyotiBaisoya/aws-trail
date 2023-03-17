const express = require("express");

const app = express();

app.get("/home",(req,res)=>{
    res.send("you are at home page")
})

app.listen(4500,()=>{
    console.log("server is connected")
})