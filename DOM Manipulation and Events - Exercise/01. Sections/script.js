function create(words) {
    let content = document.getElementById("content");
    for (let word of words) {
        let divEl = document.createElement("div");
        let pEl = document.createElement("p");
        pEl.textContent = word;
        pEl.style.display = "none";
        divEl.appendChild(pEl);
        divEl.addEventListener("click", onClick);
        content.appendChild(divEl);
    }

    function onClick(event) {
        let target = event.currentTarget;
        let children = target.children[0];
        children.style.display = children.style.display === "block" ? "none" : "block";
    }
}