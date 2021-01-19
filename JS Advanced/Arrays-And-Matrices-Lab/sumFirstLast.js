function sumFirstLast(inputArr) {
    inputArr = inputArr.map(Number);
    let result = inputArr[0] + inputArr[inputArr.length - 1];
    console.log(result);
}

sumFirstLast(['20', '30', '40']);