function toggle() {
    let textButton = document.getElementsByClassName("button")[0].textContent;
    let text = document.getElementById("extra");
    if (textButton == "More") {
        document.getElementsByClassName("button")[0].textContent = "Less";
        text.style.display = "block";
    } else if (textButton == "Less") {
        document.getElementsByClassName("button")[0].textContent = "More";
        text.style.display = "none";
    }
}