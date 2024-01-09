function largestNumebr(num1, num2, num3) {
    let nums = [num1, num2, num3]
    let sortedNums = nums.sort((a, b) => a - b);
    console.log(`The largest number is ${sortedNums[sortedNums.length-1]}.`);
}
largestNumebr(-3, -5, -22.5);