function printAndSum(par1, par2) {
    let startNum = Number(par1);
    let endNum = Number(par2);
    let totalSum = 0;
    let sequence = "";

    for (let i = startNum; i <= endNum; i++) {
        totalSum += i;
        sequence += i + " ";
    }

    console.log(sequence);
    console.log(`Sum: ${totalSum}`);
}

printAndSum("50", "60");