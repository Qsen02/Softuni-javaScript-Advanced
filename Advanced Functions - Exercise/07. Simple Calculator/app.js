function calculator() {
    let calculate = {
        init: function(selector1, selector2, selectorResult) {
            calculate.num1 = document.querySelector(selector1);
            calculate.num2 = document.querySelector(selector2);
            calculate.result = document.querySelector(selectorResult);
        },
        add: function() {
            calculate.result.value = Number(calculate.num1.value) + Number(calculate.num2.value);
        },
        subtract: function() {
            calculate.result.value = Number(calculate.num1.value) - Number(calculate.num2.value);
        }
    }
    return calculate;
}