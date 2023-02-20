import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [timer, setTimer] = useState(0);
  const [timerInterval, setTimerInterval] = useState();

  const startTimer = () => {
    const myInterval = setInterval(() => {setTimer((timer) => timer + 1)}, 1000);
    setTimerInterval(myInterval);
  }

  const stopTimer = () => {
    clearInterval(timerInterval);
  }

  const resetTimer = () => {
    stopTimer();
    setTimer(0);
  }

  const formatTimer = () => {
    const seconds = timer % 60;
    const minutes = (timer - seconds)/60
    return `${minutes > 9 ? minutes : "0" + minutes}m ${seconds > 9 ? seconds : "0" + seconds}s`
  }

  return (
    <div className="App">
      <h4>Timer:</h4>
      {formatTimer()}
      <div className='buttonGroup'>
        <input type="button" className="btnStart" value="Start" onClick={() => startTimer()}/>
        <input type="button" className="btnStop" value="Stop" onClick={() => stopTimer()}/>
        <input type="button" className="btnReset" value="Reset" onClick={() => resetTimer()}/>
      </div>
    </div>
  )
}

export default App
