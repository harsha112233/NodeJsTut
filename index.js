const express=require("express");
const fs=require('fs');
const app=express();
app.use(express.json());

const tours=JSON.parse(fs.readFileSync(`${__dirname}/Data/simple-tours-data.json`));

const getAllToour=(req,res)=>{
    res.json({
        status:"success",
        result:tours.length,
        data:{
            tours:tours
        }
})
}

const getTour=(req,res)=>{
    console.log(req.params)
    res.json({
        status:"success",
       
})
}

const createTour=(req,res)=>{
    
    const newId=tours[tours.length-1].id+1;
    const newTour=Object.assign({id:newId},req.body)
    console.log(Object)
    tours.push(newTour)

    fs.writeFile(`${__dirname}/Data/simple-tours-data.json`,JSON.stringify(tours),(err)=>{
       res.status(201).json({
        status:"success",
        data:{
           tour: newTour
        }
       })
    })
}

const updateTour=(req,res)=>{
    res.status(201).json({
        status:"success",
        data:{
            tour:"<updated data>"
        }
    })
}

const getAllUser=(req,res)=>{
    res.json({
        status:"success",
        message:"router not yet declare"
})
}

const createUser=(req,res)=>{
    res.json({
        status:"success",
        message:"router not yet declare"
})
}

const getUser=(req,res)=>{
    res.json({
        status:"success",
        message:"router not yet declare"
})
}

const updateUser=(req,res)=>{
    res.json({
        status:"success",
        message:"router not yet declare"
})
}
// app.get('/api/v1/tours',getAllToour)
// app.get('/api/v1/tours/:id',getTour)
// app.post('/api/v1/tours',createTour)
// app.patch('/api/v1/tours/:id',updateTour)

app.route('/api/v1/tours').get(getAllToour).post(createTour);
app.route('/api/v1/tours/:id').get(getTour).patch(updateTour)

app.route('/api/v1/users').get(getAllUser).post(createUser);
app.route('/api/v1/users/:id').get(getUser).patch(updateUser)

const port=8383
app.listen(port,()=>{
    console.log("server started")
})