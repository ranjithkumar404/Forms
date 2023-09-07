const express=require('express')
const app=express()
const collection=require('./mono')
const cors = require('cors');
const { mongo } = require('mongoose');
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/',cors(),(req,res)=>{

})
app.post('/',async(req,res)=>{
  const {name,mail,password}=req.body
    check=await collection.findOne({mail:mail})
   try{
    if (check){
      res.json("success")

    }
    else{
      res.json("fail")
    }
   }catch(e){
    console.log(e);
   }
})

app.post('/Sign',async(req,res)=>{
    const {name,mail,password}=req.body
    const data={
      name:name,
        mail:mail,
        password:password
    }
  try{
  
    check=await collection.findOne({mail:mail})
    if(check){
     res.json("Exist")
    }
    else{
      res.json("new")
     await collection.insertMany([data])
    }
  }catch(e){
    console.log(e);
  }
})

app.listen(3000,()=>{

    console.log("http://localhost:3000");
})



