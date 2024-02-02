function validate() {
    let emailInput = document.getElementById("email");
    let pattern = /^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/;
    emailInput.addEventListener("change", addErrorClass);

    function addErrorClass(event) {
        if (pattern.test(event.target.value)) {
            event.target.classList.remove("error");
        } else {
            event.target.classList.add("error");
        }
    }
}