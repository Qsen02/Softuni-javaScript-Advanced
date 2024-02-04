class List {
    list = [];
    constructor() {
        this.list = this.list;
        this.size = this.list.length;
    }

    add(num) {
        this.list.push(num);
        this.list.sort((a, b) => a - b);
        this.size = this.list.length;
    }
    remove(index) {
        if (this.list[index] == undefined || this.list.length == 0) {
            return;
        }
        this.list.splice(index, 1);
        this.list.sort((a, b) => a - b);
        this.size = this.list.length;
    }
    get(index) {
        if (this.list[index] == undefined || this.list.length == 0) {
            return;
        }
        return this.list[index];
    }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));