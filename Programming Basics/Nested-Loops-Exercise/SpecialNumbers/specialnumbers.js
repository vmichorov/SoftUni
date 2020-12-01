function specialNumbers(input) {
    let n = Number(input[0]);
    let numbersText = "";

    for (let i = 1111; i <= 9999; i++) {
        let current = String(i);

        for (let j = 0; j < current.length; j++) {
            let digit = Number(current[j]);
            if (n % digit !== 0) {
                break;
            } else if (j === 3) {
                numbersText += current + " ";
            }
        }
    }
    console.log(numbersText);
}

specialNumbers(["18"]);