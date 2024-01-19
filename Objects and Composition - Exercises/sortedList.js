function createSortedList() {
    let sortedList = {
        add: function(element) {
            if (typeof(element) !== "number" || isNaN(element)) {
                return;
            }
            this.arrNumbers.push(element);
            this.size++;
            this.arrNumbers.sort(this._sort);
        },
        remove: function(index) {
            if (index < 0 || index >= this.arrNumbers.length) {
                return;
            }
            this.arrNumbers.splice(index, 1);
            this.size--;
            this.arrNumbers.sort(this._sort);
        },
        get: function(index) {
            if (index < 0 || index >= this.arrNumbers.length) {
                return;
            }
            return this.arrNumbers[index];
        },
        _sort: function(a, b) {
            return a - b;
        },
        arrNumbers: [],
        size: 0
    }
    return sortedList;
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));