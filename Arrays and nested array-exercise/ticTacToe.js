function ticTacToe(coordinates) {
    let dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
    ]
    let firstPlayer = true;
    for (let coord of coordinates) {
        let [x, y] = coord.split(" ");
        if (dashboard[x][y]) {
            console.log("This place is already taken. Please choose another!");
            firstPlayer = firstPlayer;
            continue;
        } else {
            dashboard[x][y] = firstPlayer ? "X" : "O";
        }
        if (checkBoard(dashboard)) {
            console.log("The game ended! Nobody wins :(");
            printDashboard(dashboard);
            break;
        }

        if (checkForWin(dashboard)) {
            if (firstPlayer) {
                console.log("Player X wins!")
            } else {
                console.log("Player O wins!")
            }
            printDashboard(dashboard);
            break;
        }

        firstPlayer = !firstPlayer;
    }
}

function printDashboard(dashboard) {
    for (let row of dashboard) {
        console.log(row.join("\t"));
    }
    return dashboard;
}

function checkBoard(dashboard) {
    let isFull = true;
    for (let arr of dashboard) {
        for (el of arr) {
            if (!el) {
                isFull = false;
            }
        }
    }
    return isFull;
}

function checkForWin(dashboard) {
    for (let i = 0; i < dashboard.length; i++) {
        if ((dashboard[0][i] == "X" && dashboard[1][i] == "X" && dashboard[2][i] == "X") ||
            (dashboard[0][i] == "O" && dashboard[1][i] == "O" && dashboard[2][i] == "O")) {
            return true;
        } else if ((dashboard[i][0] == "X" && dashboard[i][1] == "X" && dashboard[i][2] == "X") ||
            (dashboard[i][0] == "O" && dashboard[i][1] == "O" && dashboard[i][2] == "O")) {
            return true;
        } else if ((dashboard[0][0] == "X" && dashboard[1][1] == "X" && dashboard[2][2] == "X") ||
            (dashboard[0][0] == "O" && dashboard[1][1] == "O" && dashboard[2][2] == "O")) {
            return true;
        } else if ((dashboard[0][2] == "X" && dashboard[1][1] == "X" && dashboard[2][0] == "X") ||
            (dashboard[0][2] == "O" && dashboard[1][1] == "O" && dashboard[2][0] == "O")) {
            return true;
        }
    }
    return false;
}
ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"
])