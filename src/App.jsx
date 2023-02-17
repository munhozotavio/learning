import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [word, setWord] = useState('');
  const [synonyms, setSynonyms] = useState([]);

  const handleWordChange = e => {
    setWord(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // get only results with more than 1000 points;
    fetch(`https://api.datamuse.com/words?rel_syn=${word}`).then(resp => resp.json()).then(resp => setSynonyms(resp.filter(synonym => synonym.score > 1000)));
  }

  return (
    <div className="App">
      <form onSubmit={(e) => handleSubmit(e)}>
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
