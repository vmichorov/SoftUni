function histogram(input) {
    let num = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i < input.length; i++) {
        let current = Number(input[i]);

        if (current < 200) {
            p1++;
        } else if (current < 400) {
            p2++;
        } else if (current < 600) {
            p3++;
        } else if (current < 800) {
            p4++;
        } else {
            p5++;
        }
    }

    console.log(`${(p1 / num * 100).toFixed(2)}%`);
    console.log(`${(p2 / num * 100).toFixed(2)}%`);
    console.log(`${(p3 / num * 100).toFixed(2)}%`);
    console.log(`${(p4 / num * 100).toFixed(2)}%`);
    console.log(`${(p5 / num * 100).toFixed(2)}%`);
}

histogram(["9",
"367", 
"99", 
"200", 
"799",
"999",
"333",
"555",
"111",
"9"]);