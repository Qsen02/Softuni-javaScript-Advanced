function extractText() {
    let list = document.getElementById("items");
    let result = document.getElementById("result");
    list = Array.from(list.children).map(el => el.textContent);
    result.value = list.join("\n");
}