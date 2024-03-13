import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
/*
value={option} onChange={(e)=>{
          setOption(e.target.value);
        }}
*/
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <input placeholder='Wood Cost'></input><br />
      <input placeholder='Water Cost'></input><br />
      <input placeholder='Plastic Cost'></input><br />
      <input placeholder='Container Cost'></input><br />
       <div className="dropdown-container">
        <h3>Select an Option:</h3>
        <select>
          <option value="">Select</option>
          <option value="TSJ">TSJ</option>
          <option value="TSM">TSM</option>
          <option value="TSK">TSK</option>
        </select>
      </div>
      <br />
      <button>Sumbit</button>
      
    </>
  )
}

export default App
