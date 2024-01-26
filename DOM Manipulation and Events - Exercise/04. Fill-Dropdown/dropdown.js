function addItem() {
    const selectMenu = document.getElementById("menu");
    const textInput = document.getElementById("newItemText");
    const valueInput = document.getElementById("newItemValue");
    let text = textInput.value;
    let value = valueInput.value;
    let option = document.createElement("option");
    option.text = text;
    option.value = value;
    selectMenu.appendChild(option);
    textInput.value = "";
    valueInput.value = "";
}