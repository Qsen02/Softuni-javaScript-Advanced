function solve() {
    const matrixOfCells = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ]
    const clearBtn = document.querySelector("td[colspan='3']").children[1];
    clearBtn.addEventListener("click", clearTable);
    const cellsRef = document.querySelectorAll("input");
    let cellsArray = Array.from(cellsRef);
    const tableRef = document.querySelector("table");
    const textRef = document.getElementById("check").children[0];
    const checkBtn = document.querySelector("td[colspan='3']").children[0];
    checkBtn.addEventListener("click", checkTable);

    function clearTable() {
        for (let cell of cellsArray) {
            cell.value = "";
        }
        tableRef.style.border = "none";
        textRef.textContent = "";
    }

    function checkTable() {
        let flag = false;
        for (let array of matrixOfCells) {
            for (let el of array) {
                let count = 0;
                let curEl = cellsArray[el].value;
                for (let el of array) {
                    if (curEl == cellsArray[el].value) {
                        count++;
                    }
                    if (count > 1) {
                        flag = true;
                        break;
                    }
                }
                if (flag) {
                    break;
                }
            }
            if (flag) {
                break;
            }
        }
        if (flag) {
            tableRef.style.border = "2px solid red";
            textRef.textContent = "NOP! You are not done yet...";
            textRef.style.color = "red";
        } else {
            tableRef.style.border = "2px solid green";
            textRef.textContent = "You solve it! Congratulations!";
            textRef.style.color = "green";
        }
    }
}