function sameNums(num) {
    num = num + '';
    let isSame = true;
    for (let i = 1; i < num.length; i++) {
        if (num[0] !== num[i]) {
            isSame = false;
            break;
        }
    }
    let total = 0;
    for (let i = 0; i < num.length; i++) {
        total += Number(num[i]);
    }
    console.log(isSame);
    console.log(total);
}

sameNums(433);