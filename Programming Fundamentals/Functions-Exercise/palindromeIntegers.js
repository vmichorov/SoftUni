function palindromeIntegers(arr) {
    let numbers = arr;

    for (let i = 0; i < numbers.length; i++) {
        let current = String(numbers[i]);
        let reversed = ``;
        for (let j = current.length - 1; j >= 0; j--) {
            reversed += current[j];
        }
        if (current === reversed) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

palindromeIntegers([4774, 898, 147, 752]);