function pieceOfPie(inputArr, start, end) {
    let result = [];
    let s = inputArr.indexOf(start);
    let e = inputArr.indexOf(end);
    for (let i = s; i <= e; i++) {
        result.push(inputArr[i]);
    }
    return result;
}

pieceOfPie(
    [
        'Apple Crisp',
        'Mississippi Mud Pie',
        'Pot Pie',
        'Steak and Cheese Pie',
        'Butter Chicken Pie',
        'Smoked Fish Pie'
    ],
    'Pot Pie',
    'Smoked Fish Pie'
)