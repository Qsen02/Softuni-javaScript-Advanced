function lockedProfile() {
    let infoButtons = document.querySelectorAll("button");
    let infoButtonsArray = Array.from(infoButtons);

    infoButtonsArray.forEach(el => el.addEventListener("click", unlock));

    function unlock(event) {
        let target = event.currentTarget;
        let hiddenInfo = target.parentElement.children[9];
        let radioBtn = target.parentElement.children[4];
        if (radioBtn.checked) {
            if (target.textContent == "Show more") {
                target.textContent = "Hide it";
                hiddenInfo.style.display = "block";
            } else {
                target.textContent = "Show more";
                hiddenInfo.style.display = "none";
            }
        }
    }
}