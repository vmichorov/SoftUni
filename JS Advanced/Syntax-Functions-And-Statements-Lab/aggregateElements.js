function aggregateElements(numbersArr) {
    console.log(sumElements(numbersArr));
    console.log(sumInverseValues(numbersArr));
    console.log(concatElements(numbersArr));

    function sumElements(arr) {
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += arr[i];
        }
        return total;
    }

    function sumInverseValues(arr) {
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += 1 / arr[i];
        }
        return total;
    }

    function concatElements(arr) {
        let result = '';
        for (let i = 0; i < arr.length; i++) {
            result += arr[i];
        }
        return result;
    }
}

aggregateElements([2, 4, 8, 16]);