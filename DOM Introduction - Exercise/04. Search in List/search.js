function search() {
    let towns = document.getElementById("towns").children;
    let townsAsArray = Array.from(towns);
    let match = document.getElementById("searchText").value;
    let matchCounter = 0;
    for (let town of townsAsArray) {
        let townName = town.textContent;
        if (townName.includes(match) && match != "") {
            town.style.textDecoration = "underline";
            town.style.fontWeight = "bold";
            matchCounter++;
        }
    }
    if (matchCounter > 0) {
        document.getElementById("result").textContent = `${matchCounter} matches found`;
    }
}