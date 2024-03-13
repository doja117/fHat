
import * as mongoose from "mongoose";
//0BZXD1u4DAjt9NjL
import express from 'express'
const uri = "mongodb+srv://saurabh7ojha:0BZXD1u4DAjt9NjL@cluster0.oywxijy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri).then(()=>{console.log("Yes")})
