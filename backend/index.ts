import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';

const app=express()
const data=[{
    "id":"TSJ",
    "Wood":10,
    "Water":5,
    "Plastic":10,
    "Container":100
},{
    "id":"TSM",
    "Wood":12,
    "Water":7,
    "Plastic":15,
    "Container":200
},{
    "id":"TSK",
    "Wood":10,
    "Water":5,
    "Plastic":10,
    "Container":50
}]
function returnGrm(wt, wood, water, plastic, closedContainer, ID) {
    const match = data.find(d => d.id === ID);
    if (match) {
        return wt - wood * match.Wood - water * match.Water - plastic * match.Plastic - closedContainer * match.Container;
    } else {
        return -1;
    }
}

app.use(bodyParser.json())
app.get('/returnGRM',(req,resp)=>{
    resp.set('Content-Type', 'application/json');
    console.log(req.body);
    resp.send("Data");
})
app.listen(3000,()=>{
    console.log("flag");
})
//console.log(returnGrm(10000, 100, 100, 100, 2, "TSK"));