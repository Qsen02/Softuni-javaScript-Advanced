function createCars(inputArray) {
    let cars = [];
    let result = "";
    for (let command of inputArray) {
        if (command.includes("create") && !command.includes("inherit")) {
            let [commadName, name] = command.split(" ");
            create(name);
        } else if (command.includes("inherit")) {
            let [command1, name, command2, parentName] = command.split(" ");
            for (let car of cars) {
                if (car.name == parentName) {
                    inherits(name, parentName);
                }
            }
        } else if (command.includes("set")) {
            let [commandName, name, key, value] = command.split(" ");
            set(name, key, value);
        } else {
            let [commandName, name] = command.split(" ");
            for (let car of cars) {
                if (car.name == name) {
                    print(car.name);
                    break;
                }
            }
        }
    }

    function create(name) {
        cars.push({ name: name });
    }

    function inherits(name, parentName) {
        for (let car of cars) {
            if (car.name == parentName) {
                let childObject = Object.create(car);
                childObject.name = name;
                cars.push(childObject);
            }
        }
    }

    function set(name, key, value) {
        for (let car of cars) {
            if (car.name == name) {
                car[key] = value;
            }
        }
    }

    function print(name) {
        for (let car of cars) {
            if (car.name == name) {
                for (let key in car) {
                    if (key != "name") {
                        result += `${key}:${car[key]},`;
                    }
                }
                result = result.slice(0, result.length - 1);
                result += "\n";
            }
        }
    }
    console.log(result.slice(0, result.length - 1));
}
createCars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);