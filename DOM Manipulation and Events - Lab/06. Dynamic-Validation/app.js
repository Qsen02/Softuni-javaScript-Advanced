function validate() {
    let input = document.getElementById("email");
    input.addEventListener("change", validate);

    function validate(event) {
        let pattern = /^[a-z]+[@]+[a-z]+[.]+[a-z]+$/;
        let value = event.target.value;
        if (!pattern.test(value)) {
            event.target.classList.add("error");
        } else {
            event.target.classList.remove("error");
        }
    }
}