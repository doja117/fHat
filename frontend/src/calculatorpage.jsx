import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import admin from './admin'
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function MainApp() {
  const [option,setOption]=useState("");
  const [weight,setWeight]=useState(0);
  const [wood,setWood]=useState(0);
  const [water,setWater]=useState(0);
  const [plastic,setPlastic]=useState(0);
  const [hazard,setHazard]=useState(0);
  const [grm,setGrm]=useState(0);
  return (
    
   
    <div className="App">
      <header className="App-header">
        <h5>Ferrohat TSL Combined</h5>
        <h6>Calculated GRM: {grm}</h6>
      </header>
      <div className="input-container">
        <input type="text" placeholder="Net Weight in kg" onChange={(e)=>{
          setWeight(e.target.value);
        }} />
        <input type="text" placeholder="Wood Amount in kg"  onChange={(e)=>{
          setWood(e.target.value);
        }}/>
        <input type="text" placeholder="Water Amount in kg"  onChange={(e)=>{
          setWater(e.target.value);
        }}/>
        <input type="text" placeholder="Plastic Amount in kg"  onChange={(e)=>{
          setPlastic(e.target.value);
        }}/>
        <input type="text" placeholder="Closed Container (Hazard)"  onChange={(e)=>{
          setHazard(e.target.value);
        }}/>
      </div>
      <div className="dropdown-container">
        <h3>Select an Option:</h3>
        <select value={option} onChange={(e)=>{
          setOption(e.target.value);
        }}>
          <option value="">Select</option>
          <option value="TSJ">TSJ</option>
          <option value="TSM">TSM</option>
          <option value="TSK">TSK</option>
        </select>
      </div>
      <br />
      Quality Test Report : <input type='file' placeholder=''></input> <br />
      Radiation Report : <input type='file' placeholder=''></input><br />
      <button onClick={()=>{
        setGrm(returnGrm(weight,wood,water,plastic,hazard,option));
      }}>Submit</button>
    </div>
        
  );
}

export default MainApp
