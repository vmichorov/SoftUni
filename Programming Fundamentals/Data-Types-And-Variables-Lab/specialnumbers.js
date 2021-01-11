function specialNumbers(par1) {
    let num = Number(par1);

    for (let i = 1; i <= num; i++) {
        let numText = String(i);
        let totalSum = 0;

        for (let j = 0; j < numText.length; j++) {
            let current = Number(numText[j]);
            totalSum += current;
        }
        switch (totalSum) {
            case 5:
            case 7:
            case 11:
                console.log(`${i} -> True`);
                break;
            default:
                console.log(`${i} -> False`);
        }
    }
}

specialNumbers(`15`);