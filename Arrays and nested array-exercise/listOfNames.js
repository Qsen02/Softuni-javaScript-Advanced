function listOfName(inputArray) {
    let sortedNames = inputArray.sort((a, b) => a.localeCompare(b));
    sortedNames.forEach((el, i) => console.log(`${i+1}.${el}`));
}
listOfName(["John", "Bob", "Christina", "Ema"]);