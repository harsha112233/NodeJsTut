module.exports= middlewarefun=(req,res,next)=>{
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