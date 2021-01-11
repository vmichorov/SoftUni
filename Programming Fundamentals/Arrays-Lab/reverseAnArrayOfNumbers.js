function reverseAnArrayOfNums(par1, input) {
    let n = par1;
    let myArr = input;
    let reverse = ``;

    for (let i = n - 1; i >= 0; i--) {
        reverse += myArr[i] + ` `;
    }

    console.log(reverse);
}

reverseAnArrayOfNums(2, [66, 43, 75, 89, 47]);