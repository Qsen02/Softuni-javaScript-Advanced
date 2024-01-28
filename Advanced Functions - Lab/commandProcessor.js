function solution() {
    let curStr = "";
    let commands = {
        savedStr: curStr,
        append,
        removeStart,
        removeEnd,
        print,
    }

    function append(str) {
        commands.savedStr += str;
    }

    function removeStart(num) {
        let splited = commands.savedStr.split("");
        splited.splice(0, num);
        commands.savedStr = splited.join("");
    }

    function removeEnd(num) {
        let charsToDel = commands.savedStr.slice(-num);
        commands.savedStr = commands.savedStr.split(charsToDel)[0];
    }

    function print() {
        console.log(commands.savedStr);
    }
    return commands;
}

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();