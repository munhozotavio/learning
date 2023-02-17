import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [word, setWord] = useState('');

  const handleWordChange = e => {
    setWord(e.target.value);
  };

  return (
    <div className="App">
      <form>
        <label for="wordInput">Enter your word</label>
        <input id="wordInput" type="text" onChange={(e) => handleWordChange(e)}/>
        <input type="submit" value="GO"/>
      </form>
      <div id="words">
        {word}  
      </div>
    </div>
  )
}

export default App
