function equalSum(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let evenSum = 0;
    let oddSum = 0;
    let numbersRow = "";

    for (let i = startNum; i <= endNum; i++) {
        let currentNumText = String(i);
        for (let j = 0; j < currentNumText.length; j++) {
            let currentSymbol = currentNumText[j];
            currentSymbol = Number(currentSymbol);

            if (j % 2 == 0) {
                evenSum += currentSymbol;
            } else {
                oddSum += currentSymbol;
            }
        }
        let currentNum = Number(currentNumText);
        if (evenSum === oddSum) {
            numbersRow += currentNum + " ";
        }
        evenSum = 0;
        oddSum = 0;
    }
    console.log(numbersRow);
}

equalSum(["100000", "100050"]);