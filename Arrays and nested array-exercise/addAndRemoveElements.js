function addAndRemove(inputArray) {
    let result = [];
    let num = 1;
    for (let command of inputArray) {
        if (command == "add") {
            result.push(num);
        } else {
            result.pop();
        }
        num++;
    }
    if (result.length == 0) {
        console.log("Empty");
    } else {
        console.log(result.join("\n"));
    }
}
addAndRemove(['add',
    'add',
    'remove',
    'add',
    'add'
]);