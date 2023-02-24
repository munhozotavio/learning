import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [progress, setProgress] = useState("0%")

  const handleChange = (value) => {
    const numericValue = parseInt(value);
    if (isNaN(numericValue) || numericValue < 0) setProgress("0%");
    else if (numericValue <= 100) setProgress(`${numericValue}%`); 
  }

  return (
    <div className="App">
      <div className="progressContainer">
        <div className="progressContent" style={{width: progress}}>{progress}</div>
      </div>
      <div>
        Input progress rate: 
        <input type="number" value={parseInt(progress)} onChange={e =>  handleChange(e.target.value)}/>
      </div>
    </div>
  )
}

export default App
