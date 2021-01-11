function firstLastKNums(inputArr) {
    let k = inputArr.shift();
    let firstK = inputArr.slice(0, k);
    let lastK = inputArr.slice(-k);
    console.log(firstK.join(` `));
    console.log(lastK.join(` `));
}

firstLastKNums([3, 6, 7, 8, 9]);