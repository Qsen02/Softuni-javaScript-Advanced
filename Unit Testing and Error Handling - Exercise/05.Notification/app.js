function notify(message) {
    let divMessage = document.getElementById("notification");
    divMessage.textContent = message;
    divMessage.style.display = "block";
    divMessage.addEventListener("click", hide);

    function hide() {
        divMessage.style.display = "none";
    }
}