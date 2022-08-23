var express =require('express');
var middlewarefun=require("./middleware")
var app=express();

// types of middleware
// -application level middleware
// -Router level middleware
// -Error handling middleware
// -Built in middleware
// -Third party middleware

// app.use(middlewarefun)   // application level middleware

app.get('/',(req,res)=>{
    res.send("home page")
})

app.get('/user',middlewarefun,(req,res)=>{
    res.send("<h1>about page </h1>")
})


app.listen(8080);