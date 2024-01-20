function sumTable() {
    let table = Array.from(document.querySelector("tbody").children);
    table.shift();
    table.pop();
    let sum = 0;
    for (let row of table) {
        let text = Array.from(row.children)[1].textContent;
        sum += Number(text);
    }
    document.getElementById("sum").textContent = sum;
}