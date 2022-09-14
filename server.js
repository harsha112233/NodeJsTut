const express = require('express');
const mongoose=require("mongoose");
const app = express()
const port = 3000

const dbConnection = () => {

    mongoose.connect("mongodb+srv://harish:MGpr6dtuGHNA6bfZ@cluster0.ecemwxs.mongodb.net/e-commerse?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        (err) => {
            if (err) throw err;
            console.log("Connected to MongoDB!!!");
        }
    );

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
        console.log("Connected successfully");
    });
};

const productSchema=new mongoose.Schema({
    name:String,
    brand:String,
    price:Number,
    category:String
})

const saveIndb =async()=>{
    
    const productModel=mongoose.model('products',productSchema)
    let data=new productModel({name:"Oneplus",brand:"oneplusMobile",price:45000,category:"mobile"})
    let result=await data.save();
    console.log(result)
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})

saveIndb()
app.listen(port, () => {
    dbConnection();
    
  console.log(`Example app listening on port ${port}`)
})