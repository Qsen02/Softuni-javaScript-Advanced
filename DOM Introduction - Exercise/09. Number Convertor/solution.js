function solve() {
    const btnRef = document.querySelector("button");
    btnRef.addEventListener("click", convert);
    const selectTo = document.getElementById("selectMenuTo");
    selectTo.children[0].remove();
    let binary = document.createElement("option");
    binary.value = "binary";
    binary.textContent = "Binary";
    let hexadecimal = document.createElement("option");
    hexadecimal.value = "hexadecimal";
    hexadecimal.textContent = "Hexadecimal";
    selectTo.appendChild(binary);
    selectTo.appendChild(hexadecimal);
    const inputRef = document.getElementById("input");
    const outputRef = document.getElementById("result");

    function convert() {
        let number = Number(inputRef.value);
        if (selectTo.value == "binary") {
            let result = number.toString(2);
            outputRef.value = result;
        } else {
            let result = number.toString(16).toUpperCase();
            outputRef.value = result;
        }
    }
}