function generateReport() {
    let theaders = document.querySelectorAll("thead tr th ");
    let arrayTheaders = Array.from(theaders);
    let trows = document.querySelectorAll("tbody tr");
    let trowsArray = Array.from(trows);
    let headers = {};
    let counter = 0;
    for (let th of arrayTheaders) {
        let thData = th.textContent.toLowerCase().trim();
        headers[thData] = [];
        for (let tr of trowsArray) {
            let trData = tr.children[counter].textContent;
            headers[thData].push(trData);
        }
        counter++;
    }
    let checked = {};
    for (let th of arrayTheaders) {
        let chekbox = th.children[0];
        if (chekbox.checked) {
            let thData = th.textContent.toLowerCase().trim();
            checked[thData] = null;
        }
    }
    let report = createReport(headers, checked);
    if (report.length > 0) {
        let result = JSON.stringify(report, null, 2);
        document.getElementById("output").value = result;
    } else {
        document.getElementById("output").value = "";
    }

    function createReport(headerObject, checkedObject) {
        let result = [];
        for (let header in headerObject) {
            if (header in checkedObject) {
                while (headerObject[header].length != 0) {
                    let object = {};
                    for (let header in headerObject) {
                        if (header in checkedObject) {
                            let element = headerObject[header].shift();
                            object[header] = element;
                        }
                    }
                    result.push(object);
                }
                break;
            }
        }
        return result;
    }
}