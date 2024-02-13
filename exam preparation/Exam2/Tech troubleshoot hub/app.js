window.addEventListener('load', solution);

function solution() {
    const employeeRef = document.getElementById("employee");
    const categoryRef = document.getElementById("category");
    const urgencyRef = document.getElementById("urgency");
    const teamRef = document.getElementById("team");
    const descriptionRef = document.getElementById("description");
    const addBtnRef = document.getElementById("add-btn");
    const formRef = document.querySelector("form");
    addBtnRef.addEventListener("click", add);

    function add(event) {
        event.preventDefault();
        let employee = employeeRef.value;
        let category = categoryRef.value;
        let urgency = urgencyRef.value;
        let team = teamRef.value;
        let description = descriptionRef.value;
        if (!employee || !category || !urgency || !team || !description) {
            return;
        }
        let previewRef = document.querySelector(".preview-list");
        let liEl = createElement("li");
        liEl.classList.add("problem-content");
        let articleEl = createElement("article");
        let empEl = createElement("p", `From: ${employee}`);
        articleEl.appendChild(empEl);
        let categoryEl = createElement("p", `Category: ${category}`);
        articleEl.appendChild(categoryEl);
        let urgencyEl = createElement("p", `Urgency: ${urgency}`);
        articleEl.appendChild(urgencyEl);
        let teamEl = createElement("p", `Assigned to: ${team}`);
        articleEl.appendChild(teamEl);
        let descriptionEl = createElement("p", `Description: ${description}`);
        articleEl.appendChild(descriptionEl);
        liEl.appendChild(articleEl);
        let editBtn = createElement("button", "Edit");
        editBtn.classList.add("edit-btn");
        let continueBtn = createElement("button", "Continue");
        continueBtn.classList.add("continue-btn");
        liEl.appendChild(editBtn);
        liEl.appendChild(continueBtn);
        previewRef.appendChild(liEl);
        editBtn.addEventListener("click", edit);
        continueBtn.addEventListener("click", continueAction);
        addBtnRef.disabled = true;
        formRef.reset();
    }

    function edit(event) {
        let emp = event.target.parentElement.children[0].children[0].textContent.split(": ")[1];
        let category = event.target.parentElement.children[0].children[1].textContent.split(": ")[1];
        let urgency = event.target.parentElement.children[0].children[2].textContent.split(": ")[1];
        let team = event.target.parentElement.children[0].children[3].textContent.split(": ")[1];
        let description = event.target.parentElement.children[0].children[4].textContent.split(": ")[1];
        employeeRef.value = emp;
        categoryRef.value = category;
        urgencyRef.value = urgency;
        teamRef.value = team;
        descriptionRef.value = description;
        let previewRef = document.querySelector(".preview-list");
        previewRef.children[0].remove();
        addBtnRef.disabled = false;
    }

    function continueAction() {
        let problemContent = document.querySelector(".problem-content");
        let emp = problemContent.children[0].children[0].textContent.split(": ")[1];
        let category = problemContent.children[0].children[1].textContent.split(": ")[1];
        let urgency = problemContent.children[0].children[2].textContent.split(": ")[1];
        let team = problemContent.children[0].children[3].textContent.split(": ")[1];
        let description = problemContent.children[0].children[4].textContent.split(": ")[1];
        let previewRef = document.querySelector(".preview-list");
        previewRef.children[0].remove();
        let pendingListRef = document.querySelector(".pending-list");
        let liEl = createElement("li");
        liEl.classList.add("problem-content");
        let articleEl = createElement("article");
        let empEl = createElement("p", `From: ${emp}`);
        articleEl.appendChild(empEl);
        let categoryEl = createElement("p", `Category: ${category}`);
        articleEl.appendChild(categoryEl);
        let urgencyEl = createElement("p", `Urgency: ${urgency}`);
        articleEl.appendChild(urgencyEl);
        let teamEl = createElement("p", `Assigned to: ${team}`);
        articleEl.appendChild(teamEl);
        let descriptionEl = createElement("p", `Description: ${description}`);
        articleEl.appendChild(descriptionEl);
        liEl.appendChild(articleEl);
        let resolveBtn = createElement("button", "Resolved");
        resolveBtn.classList.add("resolve-btn");
        liEl.appendChild(resolveBtn);
        pendingListRef.appendChild(liEl);
        addBtnRef.disabled = false;
        resolveBtn.addEventListener("click", resolve);
    }

    function resolve() {
        let problemContent = document.querySelector(".problem-content");
        let emp = problemContent.children[0].children[0].textContent.split(": ")[1];
        let category = problemContent.children[0].children[1].textContent.split(": ")[1];
        let urgency = problemContent.children[0].children[2].textContent.split(": ")[1];
        let team = problemContent.children[0].children[3].textContent.split(": ")[1];
        let description = problemContent.children[0].children[4].textContent.split(": ")[1];
        let previewRef = document.querySelector(".pending-list");
        previewRef.children[0].remove();
        let resolveListRef = document.querySelector(".resolved-list");
        let liEl = createElement("li");
        liEl.classList.add("problem-content");
        let articleEl = createElement("article");
        let empEl = createElement("p", `From: ${emp}`);
        articleEl.appendChild(empEl);
        let categoryEl = createElement("p", `Category: ${category}`);
        articleEl.appendChild(categoryEl);
        let urgencyEl = createElement("p", `Urgency: ${urgency}`);
        articleEl.appendChild(urgencyEl);
        let teamEl = createElement("p", `Assigned to: ${team}`);
        articleEl.appendChild(teamEl);
        let descriptionEl = createElement("p", `Description: ${description}`);
        articleEl.appendChild(descriptionEl);
        liEl.appendChild(articleEl);
        let clearBtn = createElement("button", "Clear");
        clearBtn.classList.add("clear-btn");
        liEl.appendChild(clearBtn);
        resolveListRef.appendChild(liEl);
        clearBtn.addEventListener("click", clear);
    }

    function clear() {
        let resolveListRef = document.querySelector(".resolved-list");
        resolveListRef.children[0].remove();
    }

    function createElement(type, content) {
        let element = document.createElement(type);
        if (content) {
            element.textContent = content;
        }
        return element;
    }
}