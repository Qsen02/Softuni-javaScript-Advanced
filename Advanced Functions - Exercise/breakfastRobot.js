function solution() {
    let receipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }
    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    return function(order) {
        if (order.includes("restock")) {
            let [command, ingredient, quantity] = order.split(" ");
            quantity = Number(quantity);
            return restock(ingredient, quantity);
        } else if (order.includes("prepare")) {
            let [command, product, quantity] = order.split(" ");
            quantity = Number(quantity)
            return prepare(product, quantity);
        } else {
            return report();
        }
    }

    function restock(microelement, quantity) {
        ingredients[microelement] += quantity;
        return "Success";
    }

    function prepare(receipe, quantity) {
        let neededIngrediants = {};
        for (let ingrediant in receipes[receipe]) {
            let neededQuantity = receipes[receipe][ingrediant] * quantity;
            if (neededQuantity > ingredients[ingrediant]) {
                return `Error: not enough ${ingrediant} in stock`;
            }
            neededIngrediants[ingrediant] = neededQuantity;
        }
        for (let ingrediant in neededIngrediants) {
            ingredients[ingrediant] -= neededIngrediants[ingrediant];
        }
        return "Success";
    }

    function report() {
        return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
    }
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log(manager("report"));