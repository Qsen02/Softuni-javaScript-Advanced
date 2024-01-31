function solve() {
    let formRef = document.querySelector("form");
    let [addTask, open, inProgress, complete] = document.querySelectorAll("section");
    let addBtn = formRef.elements[3];
    addBtn.addEventListener("click", createArticle);

    function createArticle(event) {
        event.preventDefault();
        let task = formRef.elements[0].value;
        let description = formRef.elements[1].value;
        let data = formRef.elements[2].value;
        if (!task || !description || !data) {
            return;
        }
        let articleEl = document.createElement("article");
        articleEl.innerHTML = createContent(task, description, data);
        open.children[1].appendChild(articleEl);
        formRef.elements[0].value = "";
        formRef.elements[1].value = "";
        formRef.elements[2].value = "";
        let startBtn = document.querySelectorAll(".green");
        let deleteBtn = document.querySelectorAll(".red");
        addEvenetListenerToStartButtons(startBtn);
        addEvenetListenerToDeleteButtons(deleteBtn);
    }

    function addEvenetListenerToStartButtons(btns) {
        let curBtns = Array.from(btns);
        curBtns.forEach(el => el.addEventListener("click", startTask));
    }

    function addEvenetListenerToDeleteButtons(btns) {
        let curBtns = Array.from(btns);
        curBtns.forEach(el => el.addEventListener("click", deleteTask));
    }

    function createContent(task, description, data) {
        return `<h3>${task}</h3>
                <p>Description: ${description}</p>
                <p>Due Date: ${data}</p>
                <div class="flex">
                   <button class="green">Start</button>
                   <button class="red">Delete</button>
                </div>`
    }

    function deleteTask(event) {
        event.target.parentElement.parentElement.remove();
    }

    function startTask(event) {
        let articleEl = event.target.parentElement.parentElement;
        event.target.parentElement.remove();
        let divEl = document.createElement("div");
        let btnRed = document.createElement("button");
        let btnOrange = document.createElement("button");
        divEl.classList.add("flex");
        btnRed.classList.add("red");
        btnOrange.classList.add("orange");
        btnRed.textContent = "Delete";
        btnOrange.textContent = "Finish";
        divEl.appendChild(btnRed);
        divEl.appendChild(btnOrange);
        articleEl.appendChild(divEl);
        inProgress.children[1].appendChild(articleEl);
        btnRed.addEventListener("click", deleteInProgressTask);
        btnOrange.addEventListener("click", completeTask);
    }

    function deleteInProgressTask(event) {
        event.target.parentElement.parentElement.remove();
    }

    function completeTask(event) {
        let articleEl = event.target.parentElement.parentElement;
        event.target.parentElement.remove();
        complete.children[1].appendChild(articleEl);
    }
}