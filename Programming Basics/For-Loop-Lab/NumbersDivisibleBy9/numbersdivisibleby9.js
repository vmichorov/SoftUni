function numsDivisibleBy9(start, end) {
    start = Number(start);
    end = Number(end);
    let total = 0;
    // let seqence = "";

    for(let i = start; i <= end; i++) {
        if (i % 9 === 0) {
            total = total + i;
            // seqence += i + " ";
        }
    }
    console.log(`The sum: ${total}`);
    // console.log(seqence);
    for(let i = start; i <= end; i++) {
        if (i % 9 === 0) {
            console.log(i);
        }
    }
}

numsDivisibleBy9("100", "200");