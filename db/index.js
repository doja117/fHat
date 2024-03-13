import * as mongoose from "mongoose";
import express from 'express'
import bodyParser from 'body-parser'
const app=express()
app.use(bodyParser.json())
//0BZXD1u4DAjt9NjL
const uri = "mongodb+srv://saurabh7ojha:0BZXD1u4DAjt9NjL@cluster0.oywxijy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri).then(()=>{console.log("Yes")})
const db=mongoose.connection;

const plantSchema=new mongoose.Schema({
  id:String,
  Wood:Number,
  Water:Number,
  Plastic:Number,
  Container:Number
})

const PlantObject=mongoose.model('PlantObject',plantSchema);
app.use(bodyParser.json());
app.put('/updatePlantVariables',async (req,resp)=>{
  let obj=await PlantObject.findOne({});
  const body=req.body;
  if (!obj){
    obj=await PlantObject.create(body);
  } else {
    obj.Wood=body.Wood|0,
    obj.Water=body.Water|0,
    obj.Plastic=body.Plastic|0,
    obj.Container=body.Container|0
    await obj.save();
  }
  resp.send(body);
})

app.post('/getObject',async (req,resp)=>{
  const data=req.body;
  console.log(data);
  const obj=await PlantObject.findOne({
    id:data.id
  });  
  if (!obj){resp.send(obj)}
  resp.send("Error").status(401);
})
app.listen(3000);
