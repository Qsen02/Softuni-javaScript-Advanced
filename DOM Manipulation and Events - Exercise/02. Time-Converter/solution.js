function attachEventsListeners() {
    let buttonsRef = document.querySelectorAll("input[type='button']");
    let buttonsArray = Array.from(buttonsRef);
    buttonsArray.forEach(btn => btn.addEventListener("click", convert));

    function convert(event) {
        let target = event.currentTarget;
        let targetField = target.parentElement.children[1];
        let textFromField = Number(targetField.value);
        switch (targetField.id) {
            case "days":
                convertInDays(textFromField);
                break;
            case "hours":
                convertInDays(textFromField / 24);
                break;
            case "minutes":
                convertInDays(textFromField / 24 / 60);
                break;
            case "seconds":
                convertInDays(textFromField / 24 / 60 / 60);
                break;
        }

    }

    function convertInDays(day) {
        let inputs = document.querySelectorAll("input[type='text']");
        inputs[0].value = day;
        inputs[1].value = day * 24;
        inputs[2].value = day * 24 * 60;
        inputs[3].value = day * 24 * 60 * 60;
    }
}