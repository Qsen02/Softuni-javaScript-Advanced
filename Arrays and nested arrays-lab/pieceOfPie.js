function pieceOfPie(inputArray, startStr, endStr) {
    let startIndex = inputArray.indexOf(startStr);
    let endIndex = inputArray.indexOf(endStr);
    let result = inputArray.slice(startIndex, endIndex + 1);
    return result;
}
pieceOfPie(['Apple Crisp',
        'Mississippi Mud Pie',
        'Pot Pie',
        'Steak and Cheese Pie',
        'Butter Chicken Pie',
        'Smoked Fish Pie'
    ],
    'Pot Pie',
    'Smoked Fish Pie'
);