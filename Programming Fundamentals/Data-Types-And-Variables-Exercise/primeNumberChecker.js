function primeNumberChecker(par1) {
    let num = Number(par1);
    let isPrime = true;

    if (num % 2 === 0 || num % 3 === 0) {
        isPrime = false;
    }

    if (isPrime) {
        console.log(`true`);
    } else {
        console.log(`false`);
    }
}

primeNumberChecker(81);