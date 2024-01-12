function uppercaseTransform(str) {
    let result = str.split(/[^a-zA-Z0-9]+/)
        .filter(Boolean)
        .join(", ")
        .toUpperCase();
    console.log(result);
}
uppercaseTransform('Hello..World!');