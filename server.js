var express =  require('express');
const mongoose = require('mongoose')
const Product = require('./model')
const app = express()
const cors = require('cors')
app.use(express.json())  // middleware
app.use(cors({
    origin : '*'
}))

mongoose.connect('mongodb+srv://santosh:Santosh@cluster0.zy00pk5.mongodb.net/?retryWrites=true&w=majority',
{useNewUrlParser: true},
mongoose.set('strictQuery', false)).then(
    ()=>console.log("mongo connected")).catch(
        err=>console.log(err))


app.post('/addproducts', async(req,res)=>{
    const{product} = req.body
    try{
        const newData = new Product({product:product})
        await newData.save();
        return res.json( await Product.find())
    }
    catch(err){
        console.log(err.message)
    }
})

app.get('/getproducts',async(req,res)=>{
    try{
        // const getdata = await Product.find();
        return res.json( await Product.find())
    }
    catch(err){
        console.log(err)

    }
})

app.get('/getproducts/:id',async(req,res)=>{
   try{ const Data = await Product.findById(req.params.id)
return res.json(Data)
}
   catch(err){console.log(err.message)}
})

app.delete('/delete/:id',async(req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id)
        return res.json(await Product.find())
    }
    catch(err){
         console.log(err)
    }
})

app.listen(1007,()=>console.log("server running"));