function deleteByEmail() {
    let input = document.querySelector("input").value;
    let emails = document.querySelectorAll("tbody tr");
    let emailsArray = Array.from(emails);
    let result = "Not found.";
    for (let tr of emailsArray) {
        let email = tr.children[1].textContent;
        if (input == email) {
            tr.remove();
            result = "Deleted.";
        }
    }
    document.getElementById("result").textContent = result;
    document.querySelector("input").value = "";
}