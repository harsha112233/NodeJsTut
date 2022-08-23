var express =require('express');
var app=express();

// types of middleware
// -application level middleware
// -Router level middleware
// -Error handling middleware
// -Built in middleware
// -Third party middleware

const middlewarefun=(req,res,next)=>{
 if(!req.query.age){
    res.send("please provide age")
 }
 else if(req.query.age<18){
    res.send("you can not access this site")
 }
 else{
    next()
 }
}

// app.use(middlewarefun)   // application level middleware

app.get('/',(req,res)=>{
    res.send("home page")
})

app.get('/user',middlewarefun,(req,res)=>{
    res.send("<h1>about page </h1>")
})


app.listen(8080);