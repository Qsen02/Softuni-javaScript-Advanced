window.addEventListener('load', solve);

function solve() {
    const inputs = {
        modelRef: document.getElementById("car-model"),
        yearRef: document.getElementById("car-year"),
        partNameRef: document.getElementById("part-name"),
        partNumberRef: document.getElementById("part-number"),
        conditionRef: document.getElementById("condition")
    }
    const formRef = document.querySelector("form");
    const nextBtnRef = document.getElementById("next-btn");
    const imgRef = document.getElementById("complete-img");
    const finalTextRef = document.getElementById("complete-text");
    nextBtnRef.addEventListener("click", move);

    function move(event) {
        event.preventDefault();
        let model = inputs.modelRef.value;
        let year = Number(inputs.yearRef.value);
        let partName = inputs.partNameRef.value;
        let partNumber = inputs.partNumberRef.value;
        let condition = inputs.conditionRef.value;
        if (!model || !year || !partName || !partNumber || !condition) {
            return;
        }
        if (!(year >= 1983 && year <= 2023)) {
            return;
        }
        let listInfoRef = document.querySelector(".info-list");
        let liEl = createLiElement(model, year, partName, partNumber, condition);
        let editBtn = createElement("button", "Edit");
        editBtn.classList.add("edit-btn");
        let conitnueBtn = createElement("button", "Continue");
        conitnueBtn.classList.add("continue-btn");
        liEl.appendChild(editBtn);
        liEl.appendChild(conitnueBtn);
        listInfoRef.appendChild(liEl);
        formRef.reset();
        nextBtnRef.disabled = true;
        imgRef.style.visibility = "hidden";
        finalTextRef.textContent = "";
        editBtn.addEventListener("click", edit);
        conitnueBtn.addEventListener("click", continueAction);
    }

    function edit() {
        let liElRef = document.querySelector(".part-content");
        let model = liElRef.children[0].children[0].textContent.split(": ")[1];
        let year = liElRef.children[0].children[1].textContent.split(": ")[1];
        let partName = liElRef.children[0].children[2].textContent.split(": ")[1];
        let partNumber = liElRef.children[0].children[3].textContent.split(": ")[1];
        let condition = liElRef.children[0].children[4].textContent.split(": ")[1];
        inputs.modelRef.value = model;
        inputs.yearRef.value = year;
        inputs.partNameRef.value = partName;
        inputs.partNumberRef.value = partNumber;
        inputs.conditionRef.value = condition;
        liElRef.remove();
        nextBtnRef.disabled = false;
    }

    function continueAction() {
        let liElRef = document.querySelector(".part-content");
        let model = liElRef.children[0].children[0].textContent.split(": ")[1];
        let year = liElRef.children[0].children[1].textContent.split(": ")[1];
        let partName = liElRef.children[0].children[2].textContent.split(": ")[1];
        let partNumber = liElRef.children[0].children[3].textContent.split(": ")[1];
        let condition = liElRef.children[0].children[4].textContent.split(": ")[1];
        let listInfoRef = document.querySelector(".confirm-list");
        let liEl = createLiElement(model, year, partName, partNumber, condition);
        let confrimBtn = createElement("button", "Confirm");
        confrimBtn.classList.add("confirm-btn");
        let cancelBtn = createElement("button", "Cancel");
        cancelBtn.classList.add("cancel-btn");
        liEl.appendChild(confrimBtn);
        liEl.appendChild(cancelBtn);
        listInfoRef.appendChild(liEl);
        liElRef.remove();
        cancelBtn.addEventListener("click", canceling);
        confrimBtn.addEventListener("click", confirming);
    }

    function canceling() {
        let liElRef = document.querySelector(".part-content");
        liElRef.remove();
        nextBtnRef.disabled = false;
    }

    function confirming() {
        let liElRef = document.querySelector(".part-content");
        liElRef.remove();
        imgRef.style.visibility = "visible";
        finalTextRef.textContent = "Part is Ordered!";
        nextBtnRef.disabled = false;
    }

    function createLiElement(model, year, partName, partNumber, condition) {
        let liEl = createElement("li");
        liEl.classList.add("part-content");
        let articleEl = createElement("article");
        let modelEl = createElement("p", `Car Model: ${model}`);
        articleEl.appendChild(modelEl);
        let yearEl = createElement("p", `Car Year: ${year}`);
        articleEl.appendChild(yearEl);
        let partNameEl = createElement("p", `Part Name: ${partName}`);
        articleEl.appendChild(partNameEl);
        let partNumberEl = createElement("p", `Part Number: ${partNumber}`);
        articleEl.appendChild(partNumberEl);
        let conditionEl = createElement("p", `Condition: ${condition}`);
        articleEl.appendChild(conditionEl);
        liEl.appendChild(articleEl);
        return liEl;
    }

    function createElement(type, content) {
        let element = document.createElement(type);
        if (content) {
            element.textContent = content;
        }
        return element;
    }
}