function reverseAnArrayOfStrings(input) {
    let myArr = input;
    let reverse = ``;

    for (let i = myArr.length - 1; i >= 0; i--) {
        reverse += myArr[i] + ` `;
    }

    console.log(reverse);
}

reverseAnArrayOfStrings(['33', '123', '0', 'dd']);