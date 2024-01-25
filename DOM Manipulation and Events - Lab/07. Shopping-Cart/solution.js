function solve() {
    let buttonsRef = document.querySelectorAll(".add-product");
    let buttons = Array.from(buttonsRef);
    let output = document.querySelector("textarea");
    buttons.forEach(btn => btn.addEventListener("click", addToCart));
    let checkout = document.querySelector(".checkout");
    checkout.addEventListener("click", calculate);
    let names = [];
    let prices = [];

    function addToCart(event) {
        let target = event.currentTarget;
        let productName = target.parentElement.parentElement.children[1].children[0].textContent;
        let price = Number(target.parentElement.parentElement.children[3].textContent);
        if (!names.includes(productName)) {
            names.push(productName);
        }
        prices.push(price);
        output.value += `Added ${productName} for ${price.toFixed(2)} to the cart.\n`;
    }

    function calculate() {
        let sum = prices.reduce((acc, val) => acc + val);
        output.value += `You bought ${names.join(", ")} for ${sum.toFixed(2)}.`;
        buttons.forEach(btn => btn.removeEventListener("click", addToCart));
        checkout.removeEventListener("click", calculate);
    }
}