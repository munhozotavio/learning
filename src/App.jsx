import { useState } from 'react'
import './App.css'
import { fetchSynonyms } from '../api/synonyms';

function App() {
  const [word, setWord] = useState('');
  const [synonyms, setSynonyms] = useState([]);

  const handleWordChange = e => {
    setWord(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetchSynonyms(word).then(setSynonyms);
    // get only results with more than 1000 points;
  }

  const handleClickList = (wordClicked) => {
    fetchSynonyms(wordClicked).then(setSynonyms);
    setWord(wordClicked);
  }

  return (
    <div className="App">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="wordInput">Enter your word</label>
        <input value={word} id="wordInput" type="text" onChange={(e) => handleWordChange(e)}/>
        <input type="submit" value="GO"/>
      </form>
      <hr/>
      <div id="synonymsWords">
        <h3>The synonyms for {word} are: </h3>
        <ul>{synonyms.map(synonym => 
          <li key={synonym.word} onClick={() => handleClickList(synonym.word)}>{synonym.word}</li>
        )}</ul>
      </div>
    </div>
  )
}

export default App
