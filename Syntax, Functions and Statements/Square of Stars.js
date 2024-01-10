function rectangle(size = 5) {
    for (let i = 1; i <= size; i++) {
        let line = "";
        line += `${"* ".repeat(size)}`;
        console.log(line);
    }
}
rectangle();