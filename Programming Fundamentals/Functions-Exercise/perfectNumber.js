function perfectNumber(arg1) {
    let num = arg1;
    let targetSum = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            targetSum += i;
            if (targetSum > num) {
                break;
            }
        }
    }
    if (targetSum === num) {
        console.log(`We have a perfect number!`);
    } else {
        console.log(`It's not so perfect.`);
    }
}

perfectNumber(28);