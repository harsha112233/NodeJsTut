var http=require("http");
http.createServer((req,res)=>{
    res.write("welcome to nodeJs");
    res.end()
}).listen(8080,()=>{
    console.log("server started")
})