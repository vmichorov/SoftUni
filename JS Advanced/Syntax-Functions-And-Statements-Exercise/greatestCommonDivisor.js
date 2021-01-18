function GCD(num1, num2) {
    let biggestDivisor;
    for (let i = 1; i <= Math.min(num1, num2); i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            biggestDivisor = i;
        }
    }
    console.log(biggestDivisor);
}

GCD(15, 5);
GCD(2154, 458);
GCD(2000, 402);