
const express = require("express");
const cors=require('cors')
const mongoose = require("mongoose");
const Product = require("./models/productModel");
const app = express();
const multer=require('multer');

const upload=multer({dest:"uploads/"});

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false}));

//routes

//fetch the products
app.get('/products', async(req,res)=>{
  try{
    const products=await Product.find({});
    res.status(200).json(products);
  }
  catch(error){
  res.status(500).json({message:error.message})
}
})


app.get('/products/:id', async(req, res)=>{
  try{
    const{id}=req.params;
    const product=await Product.findById(id);
    res.status(200).json(products);
  }
  catch(error){
    res.status(500).jsonp({message:error.message})
  }
})


//login post
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'techasia' && password === 'techasia@1234') {
    res.status(200).send({ message: 'Login successful' });
  } else {
    res.status(401).send({ message: 'Invalid credentials' });
  }
});

//add the products
app.post("/products", async (req, res) => {
  console.log("req.body");
 
  try {
    console.log("req.body 1");
    const data = await Product.create(req.body);
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.log("req.body 2");
 
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//update the products
app.post("/upload", upload.single("profileImage"), (req,res)=>{
  console.log(req.body);
  console.log(req.file);
  return res.redirect("/");
});


//update api
app.post('/products/:id',async(req,res)=>{
  try{
       const{id}=req.params;
       const product=await Product.findByIdAndUpdate(id, req.body)
       if(!product)
        {
          return res.status(404).json({message:`cannot find any product with id  ${id}`})
        }
        const updatedProduct= await Product.findById(id);
        res.status(200).json(updatedProduct);
  }
  catch(error){
    res.status(500).json({message:error.message})
  }
})

app.delete('/products/:id', async(req,res)=>{
  try{
    const {id}=req.params;
    const product=await Product.findByIdAndDelete(id)
    if(!product)
      {
return res.status(404).json({message:`cannot find any product with ID ${id}`})
      }
      res.status(200).json(product);
  }
  catch(error){
    res.status(500).json({message:error.message})
  }
})

const storage=multer.diskStorage({
  destination:function(req, file, cb){
    return cb(null, "/.uploads");
  },
  filename:function(req, file, cb){
    return cb(null, `${Date.now()}-${file.originalname}`)
  },
}); 

 
 
const port=3000
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});

mongoose
  .connect(
    
    'mongodb://localhost:27017/techasia'
  //  "mongodb+srv://techasia:techasia@1234@techasiaapi.ean1yus.mongodb.net/techasia?retryWrites=true&w=majority&appName=TechAsiaAPI"
 )
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((error) => {
    console.error();
  });

 