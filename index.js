var express =require('express');
var app=express();
app.get('/',(req,res)=>{
    res.send("home page")
})

app.get('/about',(req,res)=>{
    res.send("<h1>about page </h1>")
})

app.listen(8080);