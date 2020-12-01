function solve(num1, num2, symbol) {
    num1 = Number(num1);
    num2 = Number(num2);
    symbol = symbol;
    let result = 0;

    // NOT SENT

    switch (symbol) {
        case "+":
            console.log(`${num1} ${symbol} ${num2} = ${result = num1 + num2} – ${result % 2 == 0 ? "even" : "odd"}`);
            break;
        case "-":
            console.log(`${num1} ${symbol} ${num2} = ${result = num1 - num2} – ${result % 2 == 0 ? "even" : "odd"}`)
            break;
        case "*":
            console.log(`${num1} ${symbol} ${num2} = ${result = num1 * num2} – ${result % 2 == 0 ? "even" : "odd"}`);
            break;
        case "%":
            if (num2 === 0) {
                console.log(`Cannot divide ${num1} by zero`);
            } else {
                console.log(`${num1} ${symbol} ${num2} = ${num1 % num2}`);
            }
            break;
        case "/":
            if (num2 === 0) {
                console.log(`Cannot divide ${num1} by zero`);
            } else {
                console.log(`${num1} ${symbol} ${num2} = ${result = (num1 / num2).toFixed(2)}`);
            }
            break;
    }
}

solve("21", "0", "%")