function listProcessor(inputArray) {
    let list = [];
    for (let str of inputArray) {
        let [command, curStr] = str.split(" ");
        if (command == "add") {
            add(curStr);
        } else if (command == "remove") {
            remove(curStr);
        } else if (command == "print") {
            print();
        }
    }

    function add(str) {
        list.push(str);
    }

    function remove(str) {
        while (list.includes(str)) {
            let index = list.indexOf(str);
            list.splice(index, 1);
        }
    }

    function print() {
        console.log(list.join(","));
    }
}
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);