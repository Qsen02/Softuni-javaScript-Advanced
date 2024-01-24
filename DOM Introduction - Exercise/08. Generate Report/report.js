function generateReport() {
    let theaders = document.querySelectorAll("thead tr th ");
    let arrayTheaders = Array.from(theaders);
    let trows = document.querySelectorAll("tbody tr");
    let trowsArray = Array.from(trows);
    let headers = {};
    let report = [];
    for (let th of arrayTheaders) {
        let checkBox = th.children[0];
        if (checkBox.checked) {
            headers[th.textContent.toLowerCase().trim()] = null;
        }
    }
    for (let tr of trowsArray) {
        let count = 0;
        trData = tr.children;
        let tdArray = Array.from(trData);
        let object = {};
        for (let key in headers) {
            let tdContent = tdArray[count].textContent;
            object[key] = tdContent;
            count++;
        }
        report.push(object);
    }
    let result = JSON.stringify(report, null, 2);
    document.getElementById("output").value = result;
}