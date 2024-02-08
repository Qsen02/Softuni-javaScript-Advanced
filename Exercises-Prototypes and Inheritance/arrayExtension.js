(function solve() {
    Array.prototype.last = function() {
        return this[this.length - 1];
    }
    Array.prototype.skip = function(n) {
        if (n > this.length || n < 0) {
            return;
        }
        let result = [];
        for (let i = n; i < this.length; i++) {
            let element = this[i];
            result.push(element);
        }
        return result;
    }
    Array.prototype.take = function(n) {
        let result = [];
        if (n > this.length || n < 0) {
            return;
        }
        for (let i = 0; i < n; i++) {
            let element = this[i];
            result.push(element);
        }
        return result;
    }
    Array.prototype.sum = function() {
        let result = this.reduce((acc, val) => acc + val);
        return result;
    }
    Array.prototype.average = function() {
        let sum = this.reduce((acc, val) => acc + val);
        let result = sum / this.length;
        return result;
    }
})();