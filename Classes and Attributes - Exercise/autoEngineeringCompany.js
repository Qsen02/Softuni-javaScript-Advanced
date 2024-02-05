function autoCompany(inputArray) {
    let carBrands = {}
    for (let str of inputArray) {
        let [brand, model, quantity] = str.split(" | ");
        quantity = Number(quantity);
        if (brand in carBrands) {
            if (model in carBrands[brand]) {
                carBrands[brand][model] += quantity
            } else {
                carBrands[brand][model] = quantity;
            }
        } else {
            carBrands[brand] = {
                [model]: quantity
            };
        }
    }
    for (let brand in carBrands) {
        console.log(brand);
        for (let model in carBrands[brand]) {
            console.log(`###${model} -> ${carBrands[brand][model]}`);
        }
    }
}
autoCompany(["Mercedes-Benz | 50PS | 123",
    "Mini | Clubman | 20000",
    "Mini | Convertible | 1000",
    "Mercedes-Benz | 60PS | 3000",
    "Hyunday | Elantra GT | 20000",
    "Mini | Countryman | 100",
    "Mercedes-Benz | W210 | 100",
    "Mini | Clubman | 1000",
    "Mercedes-Benz | W163 | 200"
]);