window.addEventListener('load', solve);

function solve() {
    let inputs = {
        time: document.getElementById("time"),
        date: document.getElementById("date"),
        place: document.getElementById("place"),
        eventName: document.getElementById("event-name"),
        email: document.getElementById("email")
    }
    let addButton = document.getElementById("add-btn");
    addButton.addEventListener("click", addEvent);

    function addEvent() {
        let form = document.querySelector("form");
        let list = document.getElementById("check-list");
        if (!inputs.time.value || !inputs.date.value || !inputs.email.value || !inputs.email.value || !inputs.eventName.value) {
            return;
        }
        let liEl = createContent("li");
        liEl.classList.add("event-content");
        let articleEl = createContent("article");
        let dateEl = createContent("p", `Begins: ${inputs.date.value} at: ${inputs.time.value}`);
        articleEl.appendChild(dateEl);
        let placeEl = createContent("p", `In: ${inputs.place.value}`);
        articleEl.appendChild(placeEl);
        let eventNameEl = createContent("p", `Event: ${inputs.eventName.value}`);
        articleEl.appendChild(eventNameEl);
        let emailEl = createContent("p", `Contact: ${inputs.email.value}`);
        articleEl.appendChild(emailEl);
        let editButton = createContent("button", "Edit");
        editButton.classList.add("edit-btn");
        let continueButton = createContent("button", "Continue");
        continueButton.classList.add("continue-btn");
        liEl.appendChild(articleEl);
        liEl.appendChild(editButton);
        liEl.appendChild(continueButton);
        list.appendChild(liEl);
        form.reset();
        addButton.disabled = true;
        editButton.addEventListener("click", editContent);
        continueButton.addEventListener("click", acceptEvent);
    }

    function editContent() {
        addButton.disabled = false;
        let list = document.getElementById("check-list");
        let dateArray = list.children[0].children[0].children[0].textContent.split("at: ");
        let dateContent = dateArray[0].split(": ")[1];
        let timeContent = dateArray[1];
        inputs.date.value = dateContent.trim();
        inputs.time.value = timeContent;
        inputs.place.value = list.children[0].children[0].children[1].textContent.split(": ")[1];
        inputs.eventName.value = list.children[0].children[0].children[2].textContent.split(": ")[1];
        inputs.email.value = list.children[0].children[0].children[3].textContent.split(": ")[1];
        list.children[0].remove();
    }

    function acceptEvent() {
        let list = document.getElementById("check-list");
        let upcomingList = document.getElementById("upcoming-list");
        let dateArray = list.children[0].children[0].children[0].textContent.split("at: ");
        let dateContent = dateArray[0].split(": ")[1];
        let timeContent = dateArray[1];
        let liEl = createContent("li");
        liEl.classList.add("event-content");
        let articleEl = createContent("article");
        let dateEl = createContent("p", `Begins: ${dateContent.trim()} at: ${timeContent}`);
        articleEl.appendChild(dateEl);
        let placeEl = createContent("p", `In: ${list.children[0].children[0].children[1].textContent.split(": ")[1]}`);
        articleEl.appendChild(placeEl);
        let eventNameEl = createContent("p", `Event: ${list.children[0].children[0].children[2].textContent.split(": ")[1]}`);
        articleEl.appendChild(eventNameEl);
        let emailEl = createContent("p", `Contact: ${list.children[0].children[0].children[3].textContent.split(": ")[1]}`);
        articleEl.appendChild(emailEl);
        let moveButton = createContent("button", "Move to Finished");
        moveButton.classList.add("finished-btn");
        liEl.appendChild(articleEl);
        liEl.appendChild(moveButton);
        upcomingList.appendChild(liEl);
        moveButton.addEventListener("click", move);
        addButton.disabled = false;
        list.children[0].remove();
    }

    function move() {
        let finishedList = document.getElementById("finished-list");
        let upcomingList = document.getElementById("upcoming-list");
        let dateArray = upcomingList.children[0].children[0].children[0].textContent.split("at: ");
        let dateContent = dateArray[0].split(": ")[1];
        let timeContent = dateArray[1];
        let liEl = createContent("li");
        liEl.classList.add("event-content");
        let articleEl = createContent("article");
        let dateEl = createContent("p", `Begins: ${dateContent.trim()} at: ${timeContent}`);
        articleEl.appendChild(dateEl);
        let placeEl = createContent("p", `In: ${upcomingList.children[0].children[0].children[1].textContent.split(": ")[1]}`);
        articleEl.appendChild(placeEl);
        let eventNameEl = createContent("p", `Event: ${upcomingList.children[0].children[0].children[2].textContent.split(": ")[1]}`);
        articleEl.appendChild(eventNameEl);
        let emailEl = createContent("p", `Contact: ${upcomingList.children[0].children[0].children[3].textContent.split(": ")[1]}`);
        articleEl.appendChild(emailEl);
        liEl.appendChild(articleEl);
        finishedList.appendChild(liEl);
        upcomingList.children[0].remove();
        let clearButton = document.getElementById("clear");
        clearButton.addEventListener("click", deleting);
    }

    function deleting() {
        let finishedList = document.getElementById("finished-list");
        finishedList.children[0].remove();
    }

    function createContent(element, content) {
        let curElement = document.createElement(element);
        if (content) {
            curElement.textContent = content;
        }
        return curElement;
    }
}