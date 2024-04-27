function solve() {
    const rightAnswers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];
    let rightQuestions = 0;
    const sectionsRef = document.querySelectorAll("section");
    let sectionArray = Array.from(sectionsRef);
    const rightBtns = document.querySelectorAll("section ul .low-value div p");
    let rightBtnsArray = Array.from(rightBtns);
    rightBtnsArray.forEach(el => el.addEventListener("click", rightAnswer));

    const leftButtons = document.querySelectorAll("section ul .high-value div p");
    let leftButtonsArr = Array.from(leftButtons);
    leftButtonsArr.forEach(el => el.addEventListener("click", leftAnswer));

    let ulRef = document.getElementById("results");

    function rightAnswer(event) {
        let index = rightBtnsArray.indexOf(event.target);
        if (rightAnswers.includes(event.target.textContent)) {
            rightQuestions++;
        }
        checkAnswer(index);
    }

    function leftAnswer(event) {
        let index = leftButtonsArr.indexOf(event.target);
        if (rightAnswers.includes(event.target.textContent)) {
            rightQuestions++;
        }
        checkAnswer(index);
    }

    function checkAnswer(index) {
        if (sectionArray[index + 1] === undefined) {
            sectionArray[index].style.display = "none";
            if (rightQuestions == 3) {
                ulRef.style.display = "block";
                ulRef.children[0].children[0].textContent = "You are recognized as top JavaScript fan!";
            } else {
                ulRef.style.display = "block";
                ulRef.children[0].children[0].textContent = `You have ${rightQuestions} right answers`;
            }
        } else {
            sectionArray[index].style.display = "none";;
            sectionArray[index + 1].style.display = "block";;
        }
    }
}