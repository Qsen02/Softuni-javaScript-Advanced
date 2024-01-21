function extract(content) {
    let result = [];
    let text = document.getElementById(content).textContent;
    let pattern = /\([\w ]+\)/g;
    let validWords = text.match(pattern);
    for (let word of validWords) {
        let newWord = word.slice(1, word.length - 1);
        result.push(newWord);
    }
    return result.join("; ");
}