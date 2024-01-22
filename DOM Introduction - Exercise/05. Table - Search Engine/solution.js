function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        let table = document.querySelector("tbody").children;
        let matrix = Array.from(table);
        let match = document.getElementById("searchField").value;
        console.log(matrix);
        for (let trCollection of matrix) {
            let arr = Array.from(trCollection.children);
            for (let el of arr) {
                let textEl = el.textContent;
                if (textEl.includes(match)) {
                    trCollection.classList.add("select");
                }
            }
        }
        document.getElementById("searchField").value = " ";
    }
}