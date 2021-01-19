function negativePositive(inputArr) {
    let result = [];
    for (const el of inputArr) {
        if (el < 0) {
            result.unshift(el);
        } else {
            result.push(el);
        }
    }
    console.log(result);
}

negativePositive([7, -2, 8, 9]);
negativePositive([3, -2, 0, -1]);