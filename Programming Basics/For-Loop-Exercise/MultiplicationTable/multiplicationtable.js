function multiplicationTable(num) {
    num = Number(num);

    for (let i = 1; i <= 10; i++) {
        let result = num * i;
        console.log(`${i} * ${num} = ${result}`);
    }
}

multiplicationTable("7");