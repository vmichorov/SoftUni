function sumFromNToM(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    let total = 0;
    for (let i = num1; i <= num2; i++) {
        total += i;
    }
    console.log(total);
}

sumFromNToM('10', '15');