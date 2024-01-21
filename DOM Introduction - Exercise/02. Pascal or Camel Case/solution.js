function solve() {
    let text = document.getElementById("text").value.toLowerCase();
    let convention = document.getElementById("naming-convention").value;
    let result = null;
    if (convention == "Camel Case") {
        let array = text.split(" ");
        for (let i = 0; i < array.length; i++) {
            let word = array[i];
            if (i > 0) {
                let firstLetter = word[0].toUpperCase();
                word = word.replace(word[0], firstLetter);
            }
            array.splice(i, 1, word);
        }
        result = array.join("");
    } else if (convention == "Pascal Case") {
        let array = text.split(" ");
        for (let i = 0; i < array.length; i++) {
            let word = array[i];
            let firstLetter = word[0].toUpperCase();
            word = word.replace(word[0], firstLetter);
            array.splice(i, 1, word);
        }
        result = array.join("");
    } else {
        result = "Error!";
    }
    document.getElementById("result").textContent = result;
}