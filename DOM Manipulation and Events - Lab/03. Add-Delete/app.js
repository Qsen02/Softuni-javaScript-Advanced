function addItem() {
    let input = document.getElementById("newItemText").value;
    if (input == "") {
        return;
    }
    let list = document.getElementById("items");
    let li = document.createElement("li");
    li.textContent = input;
    list.appendChild(li);
    document.getElementById("newItemText").value = " ";
    let link = document.createElement("a");
    link.href = "#";
    link.textContent = "[Delete]";
    li.appendChild(link);
    link.addEventListener("click", deleteText);

    function deleteText() {
        li.remove();
    }
}