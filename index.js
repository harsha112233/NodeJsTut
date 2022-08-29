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
    let data=new productModel({name:"Oneplus",brand:"oneplusMobile",price:45000,category:"mobile"})
    let result=await data.save();
    console.log(result)
}

const updateIndb=async()=>{
    const product=mongoose.model('products',productSchema)
    let data =await product.updateOne(
        {name:"Oneplus"},
        {
            $set:{price:49000}
        }
    )
    console.log(data)
    
}
const deleteInDB = async ()=>{
    const product = mongoose.model('products', productSchema);
    let data = await product.deleteOne({name:'harish'})
    console.log(data);
}

const findInDB = async ()=>{
    const Product = mongoose.model('products', productSchema);
    let data = await Product.find({name:'Oneplus'})
    console.log(data);
}

// saveIndb()
// updateIndb()
// deleteInDB()
findInDB()