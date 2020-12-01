function evenPowersOf2(n) {
    n = Number(n);

    for(let i = 0; i <= n; i = i + 2) {
        console.log(Math.pow(2, i));
    }
}

evenPowersOf2("7");