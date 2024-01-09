function stringLength(str1, str2, str3) {
    let strSum = str1.length + str2.length + str3.length;
    let avgStrSum = strSum / 3;
    console.log(strSum);
    console.log(Math.floor(avgStrSum));
}
stringLength('pasta', '5', '22.3')