class FashionRetailInventory {
    constructor(storehouse, location) {
        this.storehouse = storehouse;
        this.location = location;
        this.productStock = [];
    }

    addProduct(productName, size, quantity, price) {
        for (let product of this.productStock) {
            if (product.productName == productName && product.size == size) {
                product.quantity += quantity;
                return `You added ${quantity} more pieces of product ${productName} size ${size}`;
            }
        }
        this.productStock.push({
            productName: productName,
            size: size,
            quantity: quantity,
            price: price
        });
        return `The product ${productName}, size ${size} was successfully added to the inventory`;
    }
    sendProduct(productName, size) {
        for (let product of this.productStock) {
            if (product.productName == productName && product.size == size) {
                let index = this.productStock.indexOf(product);
                this.productStock.splice(index, 1);
                return `The product ${productName}, size ${size} was successfully removed from the inventory`;
            }
        }
        throw new Error(`The product ${productName}, size ${size} is not in the inventory`);
    }
    findProductsBySize(size) {
        let list = [];
        for (let product of this.productStock) {
            if (product.size == size) {
                list.push(product);
            }
        }
        if (list.length == 0) {
            return `There are no products available in that size`;
        }
        let result = "";
        let count = 0;
        for (let product of list) {
            count++;
            if (count == list.length) {
                result += `${product.productName}-${product.quantity} pieces`;
            } else {
                result += `${product.productName}-${product.quantity} pieces, `;
            }
        }
        return result;
    }
    listProducts() {
        if (this.productStock.length == 0) {
            return `${this.storehouse} storehouse is empty`;
        }
        let result = `${this.storehouse} storehouse in ${this.location} available products:`;
        let sortedPorducts = this.productStock.sort((a, b) => a.productName.localeCompare(b.productName));
        for (let product of sortedPorducts) {
            result += `\n${product.productName}/Size:${product.size}/Quantity:${product.quantity}/Price:${product.price}$`
        }
        return result;
    }
}
const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
console.log(storeHouse.findProductsBySize("M"));
console.log(storeHouse.findProductsBySize("XL"));