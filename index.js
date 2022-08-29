const mongoose=require("mongoose");
 mongoose.connect("mongodb://localhost:27017/e-commerse")
    const productSchema=new mongoose.Schema({
        name:String,
        brand:String,
        price:Number,
        category:String
    })
const saveIndb =async()=>{
    
    const productModel=mongoose.model('products',productSchema)
    let data=new productModel({name:"Oneplus 10t",brand:"oneplus",price:45000,category:"mobile"})
    let result=await data.save();
    console.log(result)
}

saveIndb()