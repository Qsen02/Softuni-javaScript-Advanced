window.addEventListener("load", solve);

function solve() {
    const inputs = {
        nameRef: document.getElementById("snowman-name"),
        heightRef: document.getElementById("snowman-height"),
        locationRef: document.getElementById("location"),
        creatorRef: document.getElementById("creator-name"),
        attributesRef: document.getElementById("special-attribute")
    }
    const formRef = document.querySelector("form");
    const addBtnRef = document.querySelector(".add-btn");
    addBtnRef.addEventListener("click", moveContent);

    function moveContent(event) {
        event.preventDefault();
        let name = inputs.nameRef.value;
        let height = inputs.heightRef.value;
        let location = inputs.locationRef.value;
        let creator = inputs.creatorRef.value;
        let attributes = inputs.attributesRef.value;
        if (!name || !height || !location || !creator || !attributes) {
            return;
        }
        let snowmanPreviewRef = document.querySelector(".snowman-preview");
        let liEl = createLiElement(name, height, location, creator, attributes);
        liEl.classList.add("snowman-info");
        let divEl = createElement("div");
        divEl.classList.add("btn-container");
        let editBtn = createElement("button", "Edit");
        let nextBtn = createElement("button", "Next");
        editBtn.classList.add("edit-btn");
        nextBtn.classList.add("next-btn");
        editBtn.addEventListener("click", editContent);
        nextBtn.addEventListener("click", moveNextContent);
        divEl.appendChild(editBtn);
        divEl.appendChild(nextBtn);
        liEl.appendChild(divEl);
        snowmanPreviewRef.appendChild(liEl);
        formRef.reset();
        addBtnRef.disabled = true;
    }

    function editContent() {
        let liElRef = document.querySelector(".snowman-info");
        let name = liElRef.children[0].children[0].textContent.split(": ")[1];
        let height = liElRef.children[0].children[1].textContent.split(": ")[1];
        let location = liElRef.children[0].children[2].textContent.split(": ")[1];
        let creator = liElRef.children[0].children[3].textContent.split(": ")[1];
        let attributes = liElRef.children[0].children[4].textContent.split(": ")[1];
        liElRef.remove();
        inputs.nameRef.value = name;
        inputs.heightRef.value = height;
        inputs.locationRef.value = location;
        inputs.creatorRef.value = creator;
        inputs.attributesRef.value = attributes;
        addBtnRef.disabled = false;
    }

    function moveNextContent() {
        let liElRef = document.querySelector(".snowman-info");
        let name = liElRef.children[0].children[0].textContent.split(": ")[1];
        let height = liElRef.children[0].children[1].textContent.split(": ")[1];
        let location = liElRef.children[0].children[2].textContent.split(": ")[1];
        let creator = liElRef.children[0].children[3].textContent.split(": ")[1];
        let attributes = liElRef.children[0].children[4].textContent.split(": ")[1];
        liElRef.remove();
        let snowmanPreviewRef = document.querySelector(".snow-list");
        let liEl = createLiElement(name, height, location, creator, attributes);
        liEl.classList.add("snowman-content");
        let senBtn = createElement("button", "Send");
        senBtn.classList.add("send-btn");
        senBtn.addEventListener("click", sendContent);
        liEl.children[0].appendChild(senBtn);
        snowmanPreviewRef.appendChild(liEl);
    }

    function sendContent() {
        let bodyRef = document.querySelector("body");
        let mainRef = document.querySelector("main");
        mainRef.remove();
        let img = document.getElementById("back-img");
        img.hidden = false;
        let backBtn = createElement("button", "Back");
        backBtn.classList.add("back-btn");
        bodyRef.appendChild(backBtn);
        backBtn.addEventListener("click", () => {
            let img = document.getElementById("back-img");
            img.hidden = true;
            location.reload();
        })
    }

    function createLiElement(name, height, location, creator, attributes) {
        let liEl = createElement("li");
        let articleEl = createElement("article");
        let nameEl = createElement("p", `Name: ${name}`);
        articleEl.appendChild(nameEl);
        let heightEl = createElement("p", `Height: ${height}`);
        articleEl.appendChild(heightEl);
        let locationEl = createElement("p", `Location: ${location}`);
        articleEl.appendChild(locationEl);
        let creatorEl = createElement("p", `Creator: ${creator}`);
        articleEl.appendChild(creatorEl);
        let attributesEl = createElement("p", `Attributes: ${attributes}`);
        articleEl.appendChild(attributesEl);
        liEl.appendChild(articleEl);
        return liEl
    }

    function createElement(type, content) {
        let element = document.createElement(type);
        if (content) {
            element.textContent = content;
        }
        return element;
    }
}