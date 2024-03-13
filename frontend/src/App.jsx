import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h5>Ferrohat TSL Combined</h5>
        <h6>Calculated GRM:</h6>
      </header>
      <div className="input-container">
        <input type="text" placeholder="Net Weight in kg" />
        <input type="text" placeholder="Wood Amount in kg" />
        <input type="text" placeholder="Water Amount in kg" />
        <input type="text" placeholder="Plastic Amount in kg" />
        <input type="text" placeholder="Closed Container (Hazard)" />
      </div>
      <div className="dropdown-container">
        <h3>Select an Option:</h3>
        <select >
          <option value="">Select</option>
          <option value="Option 1">TSJ</option>
          <option value="Option 2">TSM</option>
          <option value="Option 3">TSK</option>
        </select>
      </div>
      <br />
      Quality Test Report : <input type='file' placeholder=''></input> <br />
      Radiation Report : <input type='file' placeholder=''></input><br />
      <button>Submit</button>
    </div>
  );
}

export default App
