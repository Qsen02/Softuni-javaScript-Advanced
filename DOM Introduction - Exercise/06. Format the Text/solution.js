function solve() {
    let text = document.getElementById("input").value;
    let textArray = text.split(". ");
    let buff = "";
    let result = "";
    let counter = 0;
    for (let sentance of textArray) {
        counter++;
        if (!sentance.includes(".")) {
            sentance += ". ";
        }
        buff += sentance;
        if (counter % 3 == 0) {
            result += `\n<p>${buff}</p>`;
            buff = "";
        }
    }
    if (buff != "") {
        result += `\n<p>${buff}</p>`;
    }
    document.getElementById("output").innerHTML = result;
}