function argumentInfo(...arguments) {
    let argumentsInfo = [];
    let typesCount = {}
    for (let argument of arguments) {
        checkArgumentType(argument);
    }
    print();

    function checkArgumentType(argument) {
        let type = typeof(argument);
        argumentsInfo.push({
            [type]: argument
        });
        if (type in typesCount) {
            typesCount[type]++;
        } else {
            typesCount[type] = 1;
        }
    }

    function print() {
        for (let argument of argumentsInfo) {
            for (let type in argument) {
                console.log(`${type}: ${argument[type]}`);
            }
        }
        let sortedArray = Object.entries(typesCount).sort((a, b) => b[1] - a[1]);
        let sortedTypes = Object.fromEntries(sortedArray);
        for (let type in sortedTypes) {
            if (sortedTypes[type] > 0) {
                console.log(`${type} = ${sortedTypes[type]}`);
            }
        }
    }
}
argumentInfo('cat', 42, 54, "asd", true, false);