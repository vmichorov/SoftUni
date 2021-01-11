function multiplicationTable(par1) {
    let num = Number(par1);

    for (let i = 1; i <= 10; i++) {
        console.log(`${num} X ${i} = ${num * i}`);
    }
}

multiplicationTable("6");