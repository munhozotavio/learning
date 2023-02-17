export function fetchSynonyms(word)  {
    return fetch(`https://api.datamuse.com/words?rel_syn=${word}`).then(resp => resp.json()).then(resp => resp.filter(synonym => synonym.score > 1000));

}

