function evenElements(inputArray) {
    let line = "";
    for (let i = 0; i < inputArray.length; i += 2) {
        let element = inputArray[i];
        line += `${element} `;
    }
    console.log(line);
}
evenElements(['20', '30', '40', '50', '60']);