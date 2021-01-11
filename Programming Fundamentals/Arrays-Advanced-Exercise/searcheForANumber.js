function searchForANumber(numbersArr, inputArr) {
    let newArr = [];
    let count = 0;
    for (let i = 0; i < inputArr[0]; i++) {
        newArr.push(numbersArr[i]);
    }
    newArr.splice(0, inputArr[1]);
    for (let i = 0; i < newArr.length; i++) {
        if (inputArr[2] === newArr[i]) {
            count++;
        }
    }
    console.log(`Number ${inputArr[2]} occurs ${count} times.`);
}

searchForANumber([7, 3, 2, 7, 9, 3, 7, 9, 5, 1, 58, 4, 2], [7, 3, 7]);