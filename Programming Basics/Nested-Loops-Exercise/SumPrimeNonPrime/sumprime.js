function sumPrime(input) {
    let current = input[0];
    let index = 0;
    let primeSum = 0;
    let nonPrimeSum = 0;

    while (current !== "stop") {
        let isPrime = true;
        let num = Number(current);

        if (num < 0) {
            console.log(`Number is negative.`);
            index++;
            current = input[index];
            continue;
        }

        if (num === 1) {
            isPrime = false;
        } else if (num === 2) {
            isPrime = true;
        } else {
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    isPrime = false;
                }
            }
        }

        if (isPrime) {
            primeSum += num;
        } else {
            nonPrimeSum += num;
        }

        index++;
        current = input[index];
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

sumPrime(["0",
"-9",
"0",
"stop"])