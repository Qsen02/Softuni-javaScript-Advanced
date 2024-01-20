function colorize() {
    let rows = document.querySelector("tbody").children;
    let array = Array.from(rows);
    for (let i = 1; i < array.length; i += 2) {
        let row = array[i];
        row.style.backgroundColor = "Teal";
    }
}