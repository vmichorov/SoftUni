function dayOfWeek(par1) {
    let num = par1;
    let days = [`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`];

    if (num >= 1 && num <= 7) {
        console.log(days[num - 1]);
    } else {
        console.log(`Invalid day!`);
    }
}

dayOfWeek(1);
dayOfWeek(2);
dayOfWeek(3);
dayOfWeek(4);
dayOfWeek(5);
dayOfWeek(6);
dayOfWeek(7);
dayOfWeek(8);