function focused() {
    let sections = document.querySelectorAll("div div input");
    let arraySection = Array.from(sections);
    arraySection.map(el => el.addEventListener("focus", hover));
    arraySection.map(el => el.addEventListener("blur", bluring));

    function hover(event) {
        let target = event.target;
        let divs = document.querySelectorAll("div div");
        let divsArray = Array.from(divs);
        for (let div of divsArray) {
            let divCollection = div.children;
            let divChildren = Array.from(divCollection);
            if (divChildren.includes(target)) {
                div.classList.add("focused");
            }
        }
    }

    function bluring(event) {
        let target = event.target;
        let divs = document.querySelectorAll("div div");
        let divsArray = Array.from(divs);
        for (let div of divsArray) {
            let divCollection = div.children;
            let divChildren = Array.from(divCollection);
            if (divChildren.includes(target)) {
                div.classList.remove("focused");
            }
        }
    }
}