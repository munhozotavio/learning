export function fetchSynonyms(word)  {
    // get only results with more than 1000 points;
    return fetch(`https://api.datamuse.com/words?rel_syn=${word}`).then(resp => resp.json()).then(resp => resp.filter(synonym => synonym.score > 1000));
}

