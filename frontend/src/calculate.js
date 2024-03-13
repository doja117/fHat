import fs from 'fs'

function returnGRM(wt,wood,water,plastic,closedContainer,ID){
    fs.readFile(__dirname+"/../mockdata.json",'utf-8',(err,data)=>{
        if (err){
            alert('db error')
        }   else {
            //console.log(typeof(JSON.parse(data)));
            //console.log(typeof(data))
            JSON.parse(data).map((d)=>{
                if (d.id==ID){
                    return wt-wood*d.Wood-water*d.Water-plastic*d.plastic-closedContainer*d.Container;
                }
            })
        }
    })
}

console.log(returnGRM(10000,12,15,10,5,"TSJ"));
