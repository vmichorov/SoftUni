function accountBalance(input) {
    let index = 0;
    let current = input[index];
    let total = 0.00;

    while (current !== "NoMoreMoney") {
        current = Number(current);
        if (current < 0) {
            console.log("Invalid operation!");
            break;
        }
        total += current;
        console.log(`Increase: ${current.toFixed(2)}`);

        index++;
        current = input[index];
    }

    console.log(`Total: ${total.toFixed(2)}`);
}

accountBalance(["120",
"45.55",
"-150"])