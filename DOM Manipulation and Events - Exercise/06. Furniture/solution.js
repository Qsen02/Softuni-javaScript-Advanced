function solve() {
    let input = document.querySelector("textarea[rows='5']");
    let generateButton = document.querySelector("button");
    generateButton.addEventListener("click", generate);
    let tableBody = document.querySelector("tbody");
    let buyButton = document.getElementById("exercise").children[5];
    buyButton.addEventListener("click", buy);
    let output = document.querySelector("textarea[rows='4']");

    function generate() {
        let data = input.value;
        let parsedData = JSON.parse(data);
        for (let curData of parsedData) {
            tableBody.appendChild(createRow(curData));
        }
    }

    function createRow(object) {
        let trEl = document.createElement("tr");
        let tdEl = document.createElement("td");
        let imgEl = document.createElement("img");
        imgEl.src = object.img;
        tdEl.appendChild(imgEl);
        trEl.appendChild(tdEl);

        let tdEl1 = document.createElement("td");
        let pEl1 = document.createElement("p");
        pEl1.textContent = object.name;
        tdEl1.appendChild(pEl1);
        trEl.appendChild(tdEl1);

        let tdEl2 = document.createElement("td");
        let pEl2 = document.createElement("p");
        pEl2.textContent = object.price;
        tdEl2.appendChild(pEl2);
        trEl.appendChild(tdEl2);

        let tdEl3 = document.createElement("td");
        let pEl3 = document.createElement("p");
        pEl3.textContent = object.decFactor;
        tdEl3.appendChild(pEl3);
        trEl.appendChild(tdEl3);

        let tdEl4 = document.createElement("td");
        let inputEl = document.createElement("input");
        inputEl.type = "checkbox";
        tdEl4.appendChild(inputEl);
        trEl.appendChild(tdEl4);
        return trEl;
    }

    function buy() {

        let names = [];
        let price = 0;
        let decFactorSum = 0;
        let trEls = document.querySelectorAll("tbody tr");
        let trData = Array.from(trEls);
        for (let data of trData) {
            let checkbox = data.children[4].children[0];
            if (checkbox.checked) {
                let name = data.children[1].children[0].textContent;
                names.push(name);
                let curPrice = data.children[2].children[0].textContent;
                curPrice = Number(curPrice);
                price += curPrice;
                let curDecFactor = data.children[3].children[0].textContent;
                curDecFactor = Number(curDecFactor);
                decFactorSum += curDecFactor;
            }

        }
        let allDecFactor = decFactorSum / names.length;
        output.value += `Bought furniture: ${names.join(", ")}\n`;
        output.value += `Total price: ${price.toFixed(2)}\n`;
        output.value += `Average decoration factor: ${allDecFactor}`
    }
}