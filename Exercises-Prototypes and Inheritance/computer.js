function createComputerHierarchy() {
    class Manufacturer {
        constructor(manufacturer) {
            this.manufacturer = manufacturer;
        }
    }
    class Keyboard extends Manufacturer {
        constructor(manufacturer, responseTime) {
            super(manufacturer);
            this.responseTime = Number(responseTime);
        }
    }
    class Monitor extends Manufacturer {
        constructor(manufacturer, width, height) {
            super(manufacturer);
            this.width = Number(width);
            this.height = Number(height);
        }
    }
    class Battery extends Manufacturer {
        constructor(manufacturer, expectedLife) {
            super(manufacturer);
            this.expectedLife = Number(expectedLife);
        }
    }
    class Computer extends Manufacturer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            super(manufacturer);
            this.processorSpeed = Number(processorSpeed);
            this.ram = Number(ram);
            this.hardDiskSpace = Number(hardDiskSpace);
        }
    }
    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = Number(weight);
            this.color = color;
            this.battery = battery;
        }
        get battery() {
            return this._battery;
        }
        set battery(battery) {
            if (!(battery instanceof Battery)) {
                throw new TypeError();
            }
            this._battery = battery;
        }
    }
    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }
        get keyboard() {
            return this._keyboard;
        }
        set keyboard(keyboard) {
            if (!(keyboard instanceof Keyboard)) {
                throw new TypeError();
            }
            this._keyboard = keyboard;
        }
        get monitor() {
            return this._monitor;
        }
        set monitor(monitor) {
            if (!(monitor instanceof Monitor)) {
                throw new TypeError();
            }
            this._monitor = monitor;
        }
    }

    return {
        Monitor,
        Keyboard,
        Battery,
        Computer,
        Laptop,
        Desktop
    }
}
let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let battery = new Battery('Energy', 3);
console.log(battery);
let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, "3.12", "Silver", battery);
console.log(laptop);
let monitor = new Monitor("super monitor", 10, 20);
let keyboard = new Keyboard("super keyboard", 50);
let desktop = new Desktop("super dekstop", 3.5, 8, 256, keyboard, monitor);
console.log(desktop);