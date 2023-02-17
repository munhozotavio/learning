import { useState } from 'react'
import './App.css'
import { fetchSynonyms } from '../api/synonyms';

function App() {
  const [word, setWord] = useState('');
  const [synonyms, setSynonyms] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const handleWordChange = e => {
    setWord(e.target.value);
  };

  const getSynonyms = (text) => {
    setIsLoading(true);
    fetchSynonyms(text).then(setSynonyms).then(() => setIsLoading(false));
  }

  const handleSubmit = e => {
    e.preventDefault();
    getSynonyms(word);
  }

  const handleClickList = (wordClicked) => {
    getSynonyms(wordClicked);
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
        <ul>{isLoading ? "Loading..." : synonyms.length > 0 ? synonyms.map(synonym => 
          <li key={synonym.word} onClick={() => handleClickList(synonym.word)}>{synonym.word}</li>
        ) : "There are no synonyms for this word =("}</ul>
      </div>
    </div>
  )
}

export default App
