class InventoryManager {
    constructor(capacity) {
        this.capacity = Number(capacity);
        this.items = [];
        this.outOfStock = [];
    }
    addItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }
        if (this.items.length == this.capacity) {
            throw new Error("The inventory is already full.");
        }
        let curItem = this.items.find(el => el.itemName == itemName);
        if (curItem) {
            curItem.quantity += quantity;
        } else {
            this.items.push({ itemName, quantity });
            return `Added ${quantity} ${itemName}(s) to the inventory.`;
        }
    }
    sellItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }
        let curItem = this.items.find(el => el.itemName == itemName);
        if (!curItem) {
            throw new Error(`The item ${itemName} is not available in the inventory.`);
        }
        if (curItem.quantity < quantity) {
            throw new Error(`Not enough ${itemName}(s) in stock.`);
        } else {
            curItem.quantity -= quantity;
            if (curItem.quantity <= 0) {
                let index = this.items.indexOf(curItem);
                this.items.splice(index, 1);
                this.outOfStock.push(curItem);
            }
            return `Sold ${quantity} ${itemName}(s) from the inventory.`
        }
    }
    restockItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }
        let curItem = this.items.find(el => el.itemName == itemName);
        if (curItem) {
            curItem.quantity += quantity;
        } else {
            this.items.push({ itemName, quantity });
        }
        let item = this.outOfStock.find(el => el.itemName == itemName);
        if (item) {
            let index = this.outOfStock.indexOf(item);
            this.outOfStock.splice(index, 1);
        }
        return `Restocked ${quantity} ${itemName}(s) in the inventory.`
    }
    getInventorySummary() {
            let result = "Current Inventory:";
            this.items.forEach(({ itemName, quantity }) => result += `\n${itemName}: ${quantity}`);
            if (this.outOfStock.length > 0) {
                result += `\nOut of Stock: ${this.outOfStock.map(el=>`${el.itemName}`).join(", ")}`;
        }
        return result;
    }
}
// const manager = new InventoryManager(2);

// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Level", 3));

// const manager = new InventoryManager(3);
// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Chisel", 3));
// console.log(manager.sellItem("Drill", 3));
// console.log(manager.sellItem("Paintbrush", 2));

// const manager = new InventoryManager(3);
// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Chisel", 3));
// console.log(manager.sellItem("Drill", 3));
// console.log(manager.restockItem("Drill", 5));
// console.log(manager.restockItem("Paintbrush", 1));

const manager = new InventoryManager(3);
console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Chisel", 3));
console.log(manager.sellItem("Drill", 3));
console.log(manager.sellItem("Hammer", 5));
console.log(manager.restockItem("Drill", 5));
console.log(manager.restockItem("Paintbrush", 1));
console.log(manager.getInventorySummary());