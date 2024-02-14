window.addEventListener('load', solve);

function solve() {
    const inputs = {
        name: document.getElementById("name"),
        email: document.getElementById("email"),
        contactNumber: document.getElementById("contact-number"),
        classType: document.getElementById("class-type"),
        classTime: document.getElementById("class-time")
    }
    const formRef = document.querySelector("form");
    const nextBtnRef = document.getElementById("next-btn");
    nextBtnRef.addEventListener("click", moveNext);

    function moveNext(event) {
        event.preventDefault();
        let name = inputs.name.value;
        let email = inputs.email.value;
        let contactNumber = inputs.contactNumber.value;
        let classType = inputs.classType.value;
        let classTime = inputs.classTime.value;

        if (!name || !email || !contactNumber || !classType || !classTime) {
            return;
        }
        let classInfoRef = document.querySelector(".class-info");
        let liEl = createLiElement(name, email, contactNumber, classType, classTime);
        let editBtn = createElement("button", "Edit");
        let continueBtn = createElement("button", "Continue");
        editBtn.classList.add("edit-btn");
        continueBtn.classList.add("continue-btn");
        liEl.appendChild(editBtn);
        liEl.appendChild(continueBtn);
        classInfoRef.appendChild(liEl);
        nextBtnRef.disabled = true;
        formRef.reset();
        editBtn.addEventListener("click", edit);
        continueBtn.addEventListener("click", continueAction);
    }

    function edit() {
        let classInfoRef = document.querySelector(".class-info");
        let name = classInfoRef.children[0].children[0].children[0].textContent;
        let email = classInfoRef.children[0].children[0].children[1].textContent;
        let contactNumber = classInfoRef.children[0].children[0].children[2].textContent;
        let classType = classInfoRef.children[0].children[0].children[3].textContent;
        let classTime = classInfoRef.children[0].children[0].children[4].textContent;
        inputs.name.value = name;
        inputs.email.value = email;
        inputs.contactNumber.value = contactNumber;
        inputs.classType.value = classType;
        inputs.classTime.value = classTime;
        classInfoRef.children[0].remove();
        nextBtnRef.disabled = false;
    }

    function continueAction() {
        let classInfoRef = document.querySelector(".class-info");
        let name = classInfoRef.children[0].children[0].children[0].textContent;
        let email = classInfoRef.children[0].children[0].children[1].textContent;
        let contactNumber = classInfoRef.children[0].children[0].children[2].textContent;
        let classType = classInfoRef.children[0].children[0].children[3].textContent;
        let classTime = classInfoRef.children[0].children[0].children[4].textContent;
        let confrimRef = document.querySelector(".confirm-class");
        let liEl = createLiElement(name, email, contactNumber, classType, classTime);
        liEl.classList.add("continue-info");
        let cancelBtn = createElement("button", "Cancel");
        cancelBtn.classList.add("cancel-btn");
        let confirmBtn = createElement("button", "Confrim");
        confirmBtn.classList.add("confirm-btn");
        liEl.appendChild(cancelBtn);
        liEl.appendChild(confirmBtn);
        confrimRef.appendChild(liEl);
        classInfoRef.children[0].remove();
        cancelBtn.addEventListener("click", cancel);
        confirmBtn.addEventListener("click", confirming);
    }

    function cancel() {
        let confrimRef = document.querySelector(".confirm-class");
        confrimRef.children[0].remove();
        nextBtnRef.disabled = false;
    }

    function confirming() {
        let bodyRef = document.querySelector("body");
        bodyRef.children[0].remove();
        let h1El = createElement("h1", "Thank you for scheduling your appointment, we look forward to seeing you!");
        h1El.id = "thank-you";
        bodyRef.appendChild(h1El);
        let doneBtn = createElement("button", "Done");
        doneBtn.id = "done-btn";
        bodyRef.appendChild(doneBtn);
        doneBtn.addEventListener("click", () => {
            location.reload();
        })
    }

    function createLiElement(name, email, contactNumber, classType, classTime) {
        let liEl = createElement("li");
        liEl.classList.add("info-item");
        let articleEl = createElement("article");
        articleEl.classList.add("personal-info");
        let nameEl = createElement("p", name);
        articleEl.appendChild(nameEl);
        let emailEl = createElement("p", email);
        articleEl.appendChild(emailEl);
        let contactNumberEl = createElement("p", contactNumber);
        articleEl.appendChild(contactNumberEl);
        let classTypeEl = createElement("p", classType);
        articleEl.appendChild(classTypeEl);
        let classTimeEl = createElement("p", classTime);
        articleEl.appendChild(classTimeEl);
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