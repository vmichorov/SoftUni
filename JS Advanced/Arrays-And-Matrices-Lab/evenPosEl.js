function evenPosElement(inputArr) {
    let result = [];
    for (let i = 0; i < inputArr.length; i += 2) {
        result.push(inputArr[i]);
    }
    console.log(result.join(' '));
}

evenPosElement(['20', '30', '40', '50', '60']);
evenPosElement(['5', '10']);