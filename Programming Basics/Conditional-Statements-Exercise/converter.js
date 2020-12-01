function solve(number, input, output) {
    number = Number(number);
    input = input;
    output = output;

    if (input === "mm") {
        if (output === "cm") {
            number /= 10;
            console.log(number.toFixed(3));
        } else if (output === "m") {
            number /= 1000;
            console.log(number.toFixed(3));
        }
    } else if (input === "cm") {
        if (output === "mm") {
            number *= 10;
            console.log(number.toFixed(3));
        } else if (output === "m") {
            number /= 100;
            console.log(number.toFixed(3));
        }
    } else if (input === "m") {
        if (output === "mm") {
            number *= 1000;
            console.log(number.toFixed(3));
        } else if (output === "cm") {
            number *= 100;
            console.log(number.toFixed(3));
        }
    }
}

solve("12", "mm", "m");
solve("150", "m", "cm");
solve("45", "cm", "mm")